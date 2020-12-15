import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Country = ({ country, handleCountryBack }) => {
  return (
    <Grid container item direction="row">
      <Grid item xs={4} />
      <Grid container item direction="column" xs={4}>
        <Typography variant="h2">{country[0].name}</Typography>
        <Typography variant="subtitle1">{country[0].region}</Typography>
        <Typography>Capital: {country[0].capital}</Typography>
        <Typography>Population: {country[0].population}</Typography>
        <Typography>
          Currency: {country[0].currencies.map((currency) => currency.name)}
        </Typography>
        <Typography>
          Languages:{" "}
          {country[0].languages.map((language) => `${language.name} `)}
        </Typography>
        <img
          src={country[0].flag}
          alt={country[0].alpha3Code}
          style={{ width: "25vh", height: "auto" }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button onClick={() => handleCountryBack()}>
          <ArrowBackIosIcon /> Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default Country;
