import Month from "../components/WorkDayPicker/Month";
import Setup from "../components/WorkDayPicker/Setup";

const WorkDayPickerDemo = () => {
  return ( <><Month year={2020}/>
    <Setup onNext={(v) => console.log(v)}/>
  </> );
}

export default WorkDayPickerDemo;