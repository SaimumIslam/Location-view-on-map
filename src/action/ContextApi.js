import React from "react";

//Location Context Api
export const initialLocation = {
  location: { lat: 22.8098048, lng: 89.4009344, place: "Saimum Islam" },
  setLocation: () => {},
  setPlace: () => {},
};
export const LocationContextApi = React.createContext(initialLocation);
