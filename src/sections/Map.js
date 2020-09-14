import React, { useEffect, useContext } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import Modal from "../components/map/Modal";
import Loading from "../components/map/Loading";

import { LocationContextApi } from "../action/ContextApi";
import { APIKEY } from "../action/Config";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const GoogleMap = (props) => {
  const childRef = React.useRef(null);

  //Contex api for loacation
  const locationContext = useContext(LocationContextApi);
  const location = locationContext.location;
  const setLocation = locationContext.setLocation;

  const loadCurrentLocation = React.useCallback(async () => {
    await window.navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, [setLocation]);

  useEffect(() => {
    loadCurrentLocation();
  }, [loadCurrentLocation]);

  const handleOpenDrawer = () => {
    childRef.current.openDrawer();
  };

  return (
    <React.Fragment>
      <Map google={props.google} zoom={8} style={mapStyles} center={location}>
        <Marker
          title={location.place}
          position={location}
          onClick={handleOpenDrawer}
        />
      </Map>
      <Modal ref={childRef} />
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: APIKEY,
  LoadingContainer: Loading,
})(GoogleMap);
