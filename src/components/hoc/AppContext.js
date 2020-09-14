import React from "react";
import LocationProvider from "./context/LocationProvider";

export default function AppContext(props) {
  return <LocationProvider>{props.children}</LocationProvider>;
}
