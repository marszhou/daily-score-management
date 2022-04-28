import { FunctionComponent } from "react";

interface ResetProps {
  onReset() : void,
  count: number
}

const Reset: FunctionComponent<ResetProps> = ({onReset, count}) => {
  return ( <div className="d-grid gap-2 mt-2 mb-2">
  <button className="btn btn-danger btn-sm" type="button" onClick={() => {
    if (window.confirm("要重置已经作的选择吗？")) {
      onReset()
    }
  }}>
    重设({count})
  </button>
</div> );
}

export default Reset;