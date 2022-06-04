import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import { schema, normalize } from 'normalizr'
import { db } from '../../app/db'
import { RootState } from '../../app/store'
import { Student } from '../../types/student'

const studentSchema = new schema.Entity('students')
const studnetsArraySchema = [studentSchema]

export const initLoadStudents = createAsyncThunk(
  'students/initLoadStudents',
  async () => {
    return db.students.toArray()
  }
)

export const saveStudents = createAsyncThunk(
  'students/saveStudents',
  async (students: Array<Student>, thunkAPI) => {
    const currentStudents = allStudents(thunkAPI.getState() as RootState)
    const deletes = _.differenceBy(currentStudents, students, 'id')
    await db.students.bulkPut(students)
    await db.students.bulkDelete(deletes.map((s) => s.id))
    return students
  }
)
export const clearStudents = createAsyncThunk(
  'students/clearStudents',
  async () => {
    await db.students.clear()
  }
)

export interface StudentState {
  ids: Array<string>
  entities: Record<string, Student>
}

const initialState: StudentState = {
  ids: [],
  entities: {},
}

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (
        action
      ): action is
        | ReturnType<typeof initLoadStudents['fulfilled']>
        | ReturnType<typeof saveStudents['fulfilled']> => {
        return (
          action.type === initLoadStudents.fulfilled.toString() ||
          action.type === saveStudents.fulfilled.toString()
        )
      },
      (state, action) => {
        const {
          result,
          entities: { students },
        } = normalize(action.payload, studnetsArraySchema)
        state.ids = result
        state.entities = students as typeof initialState.entities
      }
    )
  },
})

export const { reducer: studentsReducer } = studentsSlice

const allStudents = createSelector(
  (state: RootState) =>
    state.students.ids.map((id) => state.students.entities[id]),
  (students) => students
)
