import { useEffect, useState } from "react";
import { getAlcDrinks } from "../../../api";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Loader from "../../Loader/Loader";
import a from "./Alcoholic.module.css";
import Error from "../../Error/Error";

function Alcoholic() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [alc, setAlc] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getAlcDrinks()
      .then(
        (result) => {
          setAlc(result.drinks);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, []);

  return (
    <div className={a.container}>
      <div className={a.card}>
        {alc.map((item) => (
          <Card
            style={{ width: 200, margin: 50 }}
            cover={<img alt="example" src={item.strDrinkThumb} />}
          >
            <Meta title={item.strDrink} />
          </Card>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default Alcoholic;
