import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
const MainPage = () => {
  return (

    <div>
        <Navbar />
      <h3>Aurouchs</h3>
          <small>Main Page </small>
          <Link to="/beers">Show list of beers </Link>
    </div>
  );
};

export default MainPage;