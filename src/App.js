import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SearchCountry from "./pages/SearchCountry";
import SearchRegion from "./pages/SearchRegion";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");

      setCountries(response.data);
    };

    getCountries();
  }, []);

  return (
    <Router>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route path="/searchregion">
              <SearchRegion countries={countries} />
            </Route>
            <Route path="/searchcountry">
              <SearchCountry countries={countries} />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
