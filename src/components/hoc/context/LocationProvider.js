import React from "react";
import {
  initialLocation,
  LocationContextApi,
} from "../../../action/ContextApi";

const LocationProvider = (props) => {
  const setLocation = (position) => {
    setState((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        lat: position.lat,
        lng: position.lng,
      },
    }));
  };

  const setPlace = (place) => {
    setState((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        plcae: place,
      },
    }));
  };

  const [state, setState] = React.useState({
    ...initialLocation,
    setLocation: setLocation,
    setPlace: setPlace,
  });

  return (
    <LocationContextApi.Provider value={state}>
      {props.children}
    </LocationContextApi.Provider>
  );
};
export default React.memo(LocationProvider);
