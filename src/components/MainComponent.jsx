import React from "react";
import { SecondaryComponent } from "./SecondaryComponent";
export const MainComponent = (props) => {
  return (
    <div>
      <h2> Main Component: </h2>
      <p>user: {props.user}</p>
      <SecondaryComponent city={props.city}> </SecondaryComponent>
    </div>
  );
};
