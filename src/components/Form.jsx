import { Button, Form as FormBootstrap, Row, Col, Alert } from "react-bootstrap"
import useCategory from "../hooks/useCategory";
import { useState } from "react";
import useDrinks from "../hooks/useDrinks";

const Form = () => {
  const [search, setSearch] = useState({
    name: '',
    category: ''
  });

  const [ alert, setAlert ] = useState('')

  const { categories } = useCategory();
  const { getDrinks } = useDrinks();

const handleSubmit = e => {
    e.preventDefault();
    if(Object.values(search).includes('')){
      setAlert('Todos los campos son obligatorios.')
      return
    }

    setAlert('');
    getDrinks(search);
  }

  return (
    <FormBootstrap
      onSubmit={handleSubmit}
    >
      {alert && <Alert variant="danger" className="text-center">{alert}</Alert>}
      <Row>
        <Col md={6}>
          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label htmlFor="name">
              Nombre Bebida
            </FormBootstrap.Label>
            <FormBootstrap.Control
              type="text"
              placeholder="Ej: Tequila, Vodka"
              name="name"
              id="name"
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
              value={search.name}
            />
          </FormBootstrap.Group>
        </Col>
        <Col md={6}>
          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label htmlFor="category">
              Categoria
            </FormBootstrap.Label>
            <FormBootstrap.Select
              name="category"
              id="category"
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
              value={search.category}
            >
              <option value="">-- Selecciona una Categoria --</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </FormBootstrap.Select>
          </FormBootstrap.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Button variant="danger" className="text-uppercase w-100" type="submit">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </FormBootstrap>
  );
}

export default Form