import { Image, Modal } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks";


const DrinkModal = () => {

  const { modal, handleModalClick, recipe, loader } = useDrinks();

  const showIngredients = () => {
    let ingredients = [];

    for(let i = 1; i <= 15; i++){
      if(recipe[`strIngredient${i}`]){
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]}
            {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  }

  return (
    !loader && (
      <Modal show={modal} onHide={handleModalClick} key={recipe.idDrink}>
        <Image
          src={recipe.strDrinkThumb}
          alt={`Imagen receta ${recipe.strDrink}`}
        />
        <Modal.Header>{recipe.strDrink}</Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {recipe.strInstructions}
            <h2>Cantidades</h2>
            {showIngredients()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
}

export default DrinkModal