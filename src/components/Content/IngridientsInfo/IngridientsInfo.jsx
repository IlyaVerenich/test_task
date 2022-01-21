import { useEffect, useState } from "react";
import { getIngridientByName } from "../../../api";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import InfoIngredient from "./Info/InfoIngredient";
import i from "./IngridientsInfo.module.css";

function IngridientInfo(props) {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [ingridient, setIngridient] = useState([])

  let name = props.name.toLowerCase();

  useEffect(() => {
    setLoaded(true);
    getIngridientByName(name)
      .then ((result) => setIngridient(result.ingredients),
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, [name]);

  return(
    <div className={i.container}>
      {ingridient!=undefined && ingridient.length!=0 && <InfoIngredient info={ingridient}/>}
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  )
}

export default IngridientInfo;
