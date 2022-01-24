import h from "./Header.module.css";
import logo from "../../img/glass.svg";
import { Input, Switch } from "antd";
import "antd/dist/antd.css";

function Header(props) {

  let getLetter = (value) => {
    props.getLetter(value)
  }
  let changeTheme = () => {
    console.log("change");
  };

  return (
    <div className={h.container}>
      <img className={h.logo} src={logo} alt="rfhnbyrf" />
      <Input.Search
        placeholder="Search"
        style={{ marginTop: 15, width: 500 }}
        onSearch={getLetter}
      />
      <Switch
        onClick={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="White"
        style={{ marginTop: 20 }}
      />
    </div>
  );
}

export default Header;
