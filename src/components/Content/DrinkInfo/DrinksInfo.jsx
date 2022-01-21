import { useEffect, useState } from "react";
import { getDrink } from "../../../api";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import Info from "./Info/Info";
import d from "./DrinkInfo.module.css";

function DrinkInfo(props) {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [drink, setDrink] = useState([])

  useEffect(() => {
    setLoaded(true);
    getDrink(props.id)
      .then ((result) => setDrink(result.drinks),
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, [props.id]);
  
  return(
    <div className={d.container}>
      {!loaded && <Info info={drink[0]}/>}
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  )
}

export default DrinkInfo;
