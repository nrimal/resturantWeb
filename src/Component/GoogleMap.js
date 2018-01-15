import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const mapStyle = {
    height: '350px',
    width: '600px'
}
const MapWithAMarker = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkHI_IYkGeo-QMnBTk9UGEOZFkEHWp3Ak&",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={mapStyle}/>,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 40.052717, lng: -82.867291 }}
      >
        {<Marker position={{ lat: 40.052717, lng: -82.867291 }} onClick={props.onMarkerClick} />}
      </GoogleMap>
    )



export default MapWithAMarker