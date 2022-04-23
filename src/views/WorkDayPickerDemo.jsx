import WDPMonth from "../components/WorkDayPicker/Month";
import WorkDayPickerSetup from "../components/WorkDayPicker/WorkDayPickerSetup";

const WorkDayPickerDemo = () => {
  return ( <><WDPMonth year={2020}/>
    <WorkDayPickerSetup onNext={(v) => console.log(v.count)}/>
  </> );
}

export default WorkDayPickerDemo;