import React from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import PropTypes from 'prop-types'

const Map = ({size,center, zoom, ...props}) => {
    const Map = ReactMapboxGl({
        accessToken: props.keyAPI});
return(
    <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: size.height,
            width: size.width
        }}
    >
        <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
    </Map>
)}

Map.defaultProps = {
    center: {
        lat: 59.95,
        lng: 320.33
    },
    zoom: 11,
    size: {
        height: '300px',
        width: '300px'
    }
}

Map.propTypes = {
    keyAPI: PropTypes.string,
    zoom: PropTypes.number,
    size: PropTypes.object
}

export default Map
