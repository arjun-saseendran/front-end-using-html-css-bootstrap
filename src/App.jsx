import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCard from "./components/ProductCard/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <Container>
            <Row>
              <ProductCard />
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
