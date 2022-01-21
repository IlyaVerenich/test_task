import { useEffect, useState } from "react";
import { getAllDrinks } from "../../../api";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import Cards from "../Cards/Cards";
import d from "./Drinks.module.css";

function Drinks(props) {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [all, setAll] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getAllDrinks()
      .then(
        (result) => setAll(result.drinks),
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, []);

  return (
    <div className={d.container}>
      <div className={d.title}>All drinks</div>
      <div className={d.card}>
        {all.map((item) => (
          <Cards key={item.idDrink} item={item} setId={(value)=>props.getId(value)}/>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default Drinks;
