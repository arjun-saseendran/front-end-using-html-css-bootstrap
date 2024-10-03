import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCard from "./components/ProductCard/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <header>
        <Header />
      </header>
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
      <Footer/>
    </>
  );
}

export default App;
