import { useEffect, useState } from "react";
import { getDrinkByLetter } from "../../../api";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";
import Cards from "../Cards/Cards";
import a from "./SearchDrink.module.css"

function SearchDrink(props) {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getDrinkByLetter(props.letter)
      .then((result) => setSearch(result.drinks),
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, [props.letter]);
  
  return (
    <div className={a.container}>
      <div className={a.title}>All search drinks</div>
      <div className={a.card}>
        {search.map((item) => (
          <Cards key={item.idDrink} item={item} setId={(value)=>props.getId(value)}/>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default SearchDrink;