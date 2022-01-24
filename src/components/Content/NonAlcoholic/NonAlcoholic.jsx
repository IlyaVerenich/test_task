import { useEffect, useState } from "react";
import { getNonAlcDrinks } from "../../../api";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import Cards from "../Cards/Cards";
import n from "./NonAlcoholic.module.css";

function NonAlc(props) {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [nonAlc, setNonAlc] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getNonAlcDrinks()
      .then(
        (result) => {
          setNonAlc(result.drinks);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, []);

  return (
    <div className={n.container}>
      <div className={n.title}>All non alcoholic coctails</div>
      <div className={n.card}>
        {nonAlc.map((item) => (
          <Cards key={item.idDrink} item={item} setId={(value)=>props.getId(value)}/>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default NonAlc;
