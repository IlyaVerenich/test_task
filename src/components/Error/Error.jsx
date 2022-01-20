import { Result } from "antd";
import e from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={e.container}>
      <Result status="warning" title={props.message} />
    </div>
  );
};

export default Error;
