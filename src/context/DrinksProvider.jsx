import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {

  const [ drinks, setDrinks ] = useState([]);
  const [ modal, setModal ] = useState(false);
  const [ drinkId, setDrinkId ] = useState(null);
  const [ recipe, setRecipe ] = useState({});
  const [ loader, setLoader ] = useState(false);

  useEffect(() => {
    const getDrinkRecipe = async () => {
      if(!drinkId) return;

      try {
        setLoader(true)
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        setRecipe({});
        console.error(error);
      } finally{
        setLoader(false)
      }
    }

    getDrinkRecipe()
  }, [drinkId])

  const getDrinks = async request => {
    try {
      const { name, category } = request;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
      const { data } = await axios(url);
      setDrinks(data.drinks)
    } catch (error) {
      console.error(error);
    }
  }

  const handleModalClick = () => {
    setModal(!modal);
  }

  const handleDrinkIdClick = id => {
    setDrinkId(id)
  }


  return (
    <DrinksContext.Provider
      value={{
        getDrinks,
        drinks,
        modal,
        handleModalClick,
        handleDrinkIdClick,
        recipe, 
        loader
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
}

export {
  DrinksProvider
}

export default DrinksContext;