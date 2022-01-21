import { useEffect, useState } from "react";
import { getAlcDrinks } from "../../../api";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";
import Cards from "../Cards/Cards";
import a from "./Alcoholic.module.css"

function Alcoholic(props) {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [alcoholic, setAlcoholic] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getAlcDrinks()
      .then((result) => setAlcoholic(result.drinks),
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, []);

  return (
    <div className={a.container}>
      <div className={a.title}>All alcoholic coctails</div>
      <div className={a.card}>
        {alcoholic.map((item) => (
          <Cards key={item.idDrink} item={item} setId={(value)=>props.getId(value)}/>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default Alcoholic;
