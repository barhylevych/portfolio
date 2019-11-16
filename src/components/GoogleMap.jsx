import React from 'react';
import GoogleMapReact from 'google-map-react';

const Location = ({ text }) =>
    <div>
        {text}
    </div>;

const GoogleMap = ({size,center, zoom, ...props}) => {

        return (
            <div style={{height: size.height, width: size.width}}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <Location
                        lat={center.lat}
                        lng={center.lng}
                        text="My Location"
                    />
                </GoogleMapReact>
            </div>
        );
    }

GoogleMap.defaultProps = {
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

export default GoogleMap;