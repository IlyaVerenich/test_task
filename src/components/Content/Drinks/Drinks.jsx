import { useEffect, useState } from "react";
import { getAllDrinks } from "../../../api";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";

function Drinks() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [All, setAll] = useState([]);

  useEffect(() => {
    setLoaded(true);
    getAllDrinks()
      .then(
        (result) => {
          setAll(result.drinks);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
      .then(() => setLoaded(false));
  }, []);
  console.log(All);
  return (
    <div>
      <div>Drinks</div>
      {error && <Error message={error.message} />}
      {loaded && <Loader />}
    </div>
  );
}

export default Drinks;
