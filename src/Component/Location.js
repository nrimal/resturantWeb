import React from 'react'
import Map from './GoogleMap'
import '../css/main.css'
class Location extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/* <div className="row"> */}
                    <div className="location-information col-4">
                        <label>
                            Himalayan Grille
                        </label>
                        <p> 1307 Stoneridge Dive </p>
                        <p> Gahana, Ohio 43230 </p>
                        <p> Phone: (614) 472-0211</p>
                    </div>
                    <div id="map" className="col-8">
                        <Map />
                    </div>
                {/* </div> */}
            </div>
        );
    }
}
export default Location