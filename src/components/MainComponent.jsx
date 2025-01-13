import React, { useContext } from "react";
import { SecondaryComponent } from "./SecondaryComponent";
import { DataContext } from "../App";

export const MainComponent = () => {
  const { user } = useContext(DataContext);

  return (
    <div>
      <h2>Main Component:</h2>
      <p>user: {user}</p>
      <SecondaryComponent />
    </div>
  );
};
