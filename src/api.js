import axios from "axios";

export const getNonAlcDrinks = () => {
  return axios
    .get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
    .then((res) => {
      return res.data;
    });
};

export const getAlcDrinks = () => {
  return axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then((res) => {
      return res.data;
    });
};

export const getAllDrinks = () => {
  return axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then((res) => {
      return res.data;
    });
};

export const getRandom = () => {
  return axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
      return res.data;
    });
};
