import axios from "axios";

export const getNonAlcDrinks = () => {
  return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then((res) => res.data);
};

export const getAlcDrinks = () => {
  return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then((res) => res.data);
};

export const getAllDrinks = () => {
  return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then((res) => res.data);
};

export const getRandom = () => {
  return axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => res.data);
};


export const getIngridients = () => {
  return axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then((res) => res.data);
};

export const getDrink = (ID) => {
  return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ID}`)
    .then((res) => res.data)
}