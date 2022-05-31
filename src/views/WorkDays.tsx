import { FunctionComponent } from "react";
import WorkDayPicker from "../components/WorkDayPicker/WorkDayPicker";

interface WorkDaysProps {

}

const WorkDays: FunctionComponent<WorkDaysProps> = () => {
  return ( <>
    <h2>日期设置</h2>
    <div className="ms-1 mt-4">
    <WorkDayPicker onSave={(title, days) => {console.log(title, days)}}/>
    </div>
  </> );
}

export default WorkDays;