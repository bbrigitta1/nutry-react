import {} from "antd";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppHeader from "../../header/AppHeader";
import MenuBar from "../../common/MenuBar";
import AddFood from "./AddFood";
import Profile from "./Profile";
import Statistics from "./Statistics";

function MainPage({ children }) {

  const background = {
    background: "efefef",

  };
  

  return (
    <div className="main-page" style={background} >
      <BrowserRouter>
        <AppHeader />
        <MenuBar />

        <Switch>
          <Route path="/add-food" exact component={AddFood} />
          <Route path="/statistics" exact component={Statistics} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>

      {children}
    </div>
  );
}

export default MainPage;
