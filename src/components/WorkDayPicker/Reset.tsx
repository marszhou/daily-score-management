import { FunctionComponent } from "react";

interface ResetProps {
  onReset() : void
}

const Reset: FunctionComponent<ResetProps> = ({onReset}) => {
  return ( <button onClick={onReset}>重设</button> );
}

export default Reset;