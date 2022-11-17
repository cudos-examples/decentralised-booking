import { GlobalStyle } from "@cosmicdapp/design";
import { ErrorProvider, } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import { pathHome, pathLogin, pathAdd, pathTickets } from "./paths";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Add } from "./routes/Add";
import { Tickets } from "./routes/Tickets";
import { CosmWasmProvider } from "./client";
import { EncryptProvider } from "./encrypt";
import { ProtectedSwitch } from "./ProtectedSwitch";

export function App(): JSX.Element {
  return (
    <ErrorProvider>
      <CosmWasmProvider config={config}>
        <EncryptProvider>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <ProtectedSwitch authPath={pathLogin}>
                <Route exact path={pathHome} component={Home} />
                <Route exact path={pathAdd} component={Add} />
                <Route exact path={pathTickets} component={Tickets} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </EncryptProvider>
      </CosmWasmProvider>
    </ErrorProvider>
  );
}
