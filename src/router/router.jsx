import React from "react";
import main from "../components/main";

import { BrowserRouter as Router, Route } from "react-router-dom";


const Routes = () => {
  return (
    <>
      <Router>
      
          <Route exact path="/" component={main} />
  
        
      </Router>
    </>
  );
};

export default Routes;
