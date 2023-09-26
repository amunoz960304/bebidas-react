import { useContext } from "react";
import DrinksContext from "../context/DrinksProvider";

const useDrinks = () => useContext(DrinksContext);

export default useDrinks;