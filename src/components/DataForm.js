import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import AnimatedButton from "./AnimatedButton";
import AnimatedTextField from "./AnimatedTextField";

const DataForm = () => {
  const [property1, setProperty1] = useState("");
  const [property2, setProperty2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://91.203.132.6/handleData", {
        data: {
          property1,
          property2,
        },
      });
      // Handle successful data submission
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AnimatedTextField
            label="Property 1"
            value={property1}
            onChange={(e) => setProperty1(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <AnimatedTextField
            label="Property 2"
            value={property2}
            onChange={(e) => setProperty2(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
      <AnimatedButton type="submit">Submit Data</AnimatedButton>
    </form>
  );
};

export default DataForm;
