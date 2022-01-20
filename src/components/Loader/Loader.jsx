import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import l from "./Loader.module.css";

const Loader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className={l.container}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;
