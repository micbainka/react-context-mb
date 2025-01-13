import React, { useContext } from "react";
import { DataContext } from "../App";

export const SecondaryComponent = () => {
  const { city } = useContext(DataContext);

  return (
    <div>
      <h3>Secondary Component:</h3>
      <p>city: {city}</p>
    </div>
  );
};
