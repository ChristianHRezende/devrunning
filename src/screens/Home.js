import React from "react";
import Header from "../elements/Header";

const menu = {
  text: "Corridas Online",
  small: "Admin",
  items: [{ to: "/login", text: "Login", position: "right" }]
};

const Home = props => {
  return (
    <div>
      <Header menu={menu} />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
