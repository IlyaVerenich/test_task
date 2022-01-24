import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import c from "./Cards.module.css";

function Cards (props) {

  let getId = () => {
    props.setId(props.item.idDrink)
  }
  return(
    <Card
      onClick={getId}
      className={c.card} 
      style={{ width: 200, margin: 50 }}
      cover={<img alt="example" src={props.item.strDrinkThumb} />}
    >
      <Meta title={props.item.strDrink} />
    </Card>
  )
}

export default Cards;