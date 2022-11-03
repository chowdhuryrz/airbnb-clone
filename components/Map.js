import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  return (
    <>
      <ReactMapGl
        mapStyle="mapbox://styles/chowdhuryrz/cla0eg950000214o5x78ybn11"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGl>
    </>
  );
}

export default Map;
