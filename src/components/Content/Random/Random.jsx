import { useEffect, useState } from "react";
import { getRandom } from "../../../api";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import r from "./Random.module.css";

const Random = () => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [randomAlc, setRandomAlc] = useState([]);

  useEffect(() => {
    getRandomQuntity();
  }, []);

  let getRandomQuntity = () => {
    setLoaded(true);
    Promise.all([...new Array(12)].map(() => getRandom())).then(
      (results) => {
        setRandomAlc(results);
      },
      (error) => {
        setError(error);
      }
    );
    setLoaded(false);
  };
  return (
    <div className={r.container}>
      <div className={r.card}>
        {randomAlc.map((item) => (
          <Card
            key={item.idDrink}
            style={{ width: 200, margin: 50 }}
            cover={<img alt="example" src={item.drinks[0].strDrinkThumb} />}
          >
            <Meta title={item.drinks[0].strDrink} />
          </Card>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
};

export default Random;
