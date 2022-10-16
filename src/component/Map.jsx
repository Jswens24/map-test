import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

const Map = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            mapContainerClassName='map-container'
        >
            <Marker position={{ lat: 44, lng: -80 }} />
        </GoogleMap>
    )
}

export default Map;