import { useEffect, useState } from "react";
import { getRandom } from "../../../api";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import r from "./Random.module.css";
import Cards from "../Cards/Cards";

const Random = (props) => {
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
      <div className={r.title}>Random drinks</div>
      <div className={r.card}>
        {randomAlc.map((item) => (
          <Cards key={item.idDrink} item={item.drinks[0]} setId={(value)=>props.getId(value)}/>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
};

export default Random;
