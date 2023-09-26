import { Button, Card, Col } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"

const Drink = ({drink}) => {
  
  const { handleModalClick, handleDrinkIdClick } = useDrinks();
  const { strDrink, strDrinkThumb, idDrink } = drink;

  return (
    <Col md={3} lg={6}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
        />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button 
            className="w-100 text-uppercase mt-2"
            variant="warning"  
            onClick={() => {
                handleModalClick()
                handleDrinkIdClick(idDrink)
              }
            }
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Drink