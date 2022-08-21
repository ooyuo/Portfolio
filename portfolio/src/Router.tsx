import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Website_1 from "./routes/website-1";
import Site_1 from "./routes/website-1";
import Websites from "./routes/websites";
import Sites from "./routes/websites";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:webId">
          <Website_1 />
        </Route>
        <Route path="/">
          <Websites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;