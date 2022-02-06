import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { Headline } from "./styles/Simplebar.styled";
import makeAnimated from "react-select/animated";

const optionToppings = [
  { value: "extra-cheese", label: "🧀 Extra Cheese" },
  { value: "onions", label: "🧅 Onions" },
  { value: "bacon", label: "🥓 Bacon" },
  { value: "basil", label: "🎇 Basil" },
];

const optionsSize = [
  { value: " 9", label: "🍔 Small`" },
  { value: " 12", label: "🍔 Medium`" },
  { value: " 14", label: "🍔 Large`" },
  { value: " 18", label: "🍔 Extra-large`" },
];

const SelectSection = () => {
 

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "green",
      },
    };
  };

  return (
    <>
      <Headline>
        <h1>React Select</h1>
      </Headline>
      <Container>
        <Row>
          <Col className="md">
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>The Chessy Burger In The Town</Card.Title>
                <Card.Text>
                  <p>Chillox</p>
                </Card.Text>
                <Select
        
                  components={makeAnimated()}
                  options={optionToppings}
                  theme={customTheme}
                  className="mb-3"
                  placeholder="Select Your Core Toppings"
                  isSearchable
                  noOptionsMessage={() => "😢 sorry! Not availabale"}
                  isMulti
                />
                <Select
       
                  options={optionsSize}
                  theme={customTheme}
                  components={makeAnimated()}
                  className="mb-3"
                  placeholder="How much Hungry?"
                  isSearchable
                  noOptionsMessage={() => "😢 sorry! Not availabale"}
                  isMulti
                />

                <button type="button" class="btn btn-success">
                Place Order
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="md">
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>The Chessy Burger In The Town</Card.Title>
                <Card.Text>
                  <p>Chillox</p>
                </Card.Text>
                <Select
    
                  components={makeAnimated()}
                  options={optionToppings}
                  theme={customTheme}
                  className="mb-3"
                  placeholder="Select Your Core Toppings"
                  isSearchable
                  noOptionsMessage={() => "😢 sorry! Not availabale"}
                  isMulti
                />
                <Select
           
                  options={optionsSize}
                  theme={customTheme}
                  components={makeAnimated()}
                  className="mb-3"
                  placeholder="How much Hungry?"
                  isSearchable
                  noOptionsMessage={() => "😢 sorry! Not availabale"}
                  isMulti
                />

                <button type="button" class="btn btn-success">
                Place Order
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="md">
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>The Chessy Burger In The Town</Card.Title>
                <Card.Text>
                  <p>Chillox</p>
                </Card.Text>
                <Select
       
                  components={makeAnimated()}
                  options={optionToppings}
                  theme={customTheme}
                  className="mb-3"
                  placeholder="Select Your Core Toppings"
                  isSearchable
                  noOptionsMessage={() => "😢 sorry! Not availabale"}
                  isMulti
                />
                <Select
    
                  options={optionsSize}
                  theme={customTheme}
                  className="mb-3"
                  components={makeAnimated()}
                  placeholder="How much Hungry?"
                  isSearchable
                  noOptionsMessage={() => "😢 sorry! Not availabale"}
                  isMulti
                />

                <button type="button" class="btn btn-success">
                  Place Order
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SelectSection;
