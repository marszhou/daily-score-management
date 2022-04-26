import { FunctionComponent } from "react";

interface ResetProps {
  onReset() : void
}

const Reset: FunctionComponent<ResetProps> = ({onReset}) => {
  return ( <div className="d-grid gap-2 mt-2 mb-2">
  <button className="btn btn-danger btn-sm" type="button" onClick={onReset}>
    重设
  </button>
</div> );
}

export default Reset;