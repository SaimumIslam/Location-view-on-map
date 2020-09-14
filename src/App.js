import React from "react";
import AppContext from "./components/hoc/AppContext";
import ErrorBoundary from "./components/hoc/ErrorBoundary";
import Map from "./sections/Map";

function App() {
  return (
    <ErrorBoundary>
      <AppContext>
        <Map />
      </AppContext>
    </ErrorBoundary>
  );
}

export default App;
