import WorkDayPicker from "../components/WorkDayPicker/WorkDayPicker";

const WorkDayPickerDemo = () => {

  return ( <><WorkDayPicker onSave={(title, days) => {console.log(title, days)}}/>
  </> );
}

export default WorkDayPickerDemo;