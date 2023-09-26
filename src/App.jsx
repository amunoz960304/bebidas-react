import { Container } from "react-bootstrap";
import Form from "./components/Form";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import DrinksList from "./components/DrinksList";
import DrinkModal from "./components/DrinkModal";

const App = () => {

  return (
    <CategoryProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Buscador Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Form />
          <DrinksList />
          <DrinkModal/>
        </Container>
      </DrinksProvider>
    </CategoryProvider>
  );
}

export default App
