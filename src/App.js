import React from "react"
import ReactDOM from 'react-dom/client';
import Nav from "./components/Nav";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Data from "./Data";
import './index.css';

export default function App() {
  const cards = Data.map(item => {
    return (
      <Card key={item.id} {...item} />
    )
  })

  return (
    <div>
      <Nav />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  );
}
