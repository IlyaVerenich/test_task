import { useEffect, useState } from "react";
import { getIngridients } from "../../../api";
import { Button } from "antd";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import i from "./Ingridients.module.css"


function Ingridients() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [ingridient, setIngridient] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getIngridients()
      .then(
        (result) => setIngridient(result.drinks),
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, []);
  
  return (
    <div className={i.container}>
      <div className={i.title}>All ingridients</div>
      <div className={i.card}>
        {ingridient.map((item) => (
          <Button>{item.strIngredient1}</Button>
        ))}
      </div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default Ingridients;
