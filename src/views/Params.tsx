import { FunctionComponent } from "react";
import RatioSettings from "../components/RatioSettings/RatioSettings";

interface ParamsProps {

}

const Params: FunctionComponent<ParamsProps> = () => {
  return (
    <>
      <h2>参数设置</h2><div className="ms-1 mt-4">
      <RatioSettings
        onSave={(settings) => {
          console.log(settings)
        }}
      /></div>
    </> );
}

export default Params;