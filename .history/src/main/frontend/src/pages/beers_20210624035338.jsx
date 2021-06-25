import React from "react";
import NavBar from "../components/navbar/Navbar";
import { BeerCard } from "../components/beerCard";

const BeersPage = () => {
  return (
    <div>
      <NavBar />
  <BeerCard />
      <h3>Aurouchs</h3>
      <small>Main Page </small>
    </div>
  );
};

export default BeersPage;
