import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <h3>Aurouchs</h3>
          <small>Main Page </small>
          <Link to="/beers">Show list of beers </Link>
    </div>
  );
};

export default MainPage;
