import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
import "./index.css";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        img={item.img}
        title={item.title}
        price={item.price}
        star={item.star}
        location={item.location}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
