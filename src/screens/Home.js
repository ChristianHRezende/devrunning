import React from "react";
import Header from "../elements/Header";
import { Image } from "semantic-ui-react";
import logo from "../assets/logo-home.png";

const menu = {
  text: "Corridas Online",
  items: [{ to: "/login", text: "Login", position: "right" }]
};

const Home = props => {
  return (
    <div>
      <Header menu={menu} />
      <Image src={logo} size="medium" spaced centered />
    </div>
  );
};

export default Home;
