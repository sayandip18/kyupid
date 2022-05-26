import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Map from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function BMap() {
    const [area, setArea] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await axios.get('https://kyupid-api.vercel.app/api/users');
            const areaData = await axios.get('https://kyupid-api.vercel.app/api/areas');
        };

        fetchData();
    }, [])

    return (
        <div>
            <Map
                initialViewState={{
                    latitude: 12.89,
                    longitude: 77.47,
                    zoom: 9,
                    pitch:45,
                    bearing: 340,
                }}
                mapStyle={"mapbox://styles/mapbox/dark-v9"}
                mapboxAccessToken={MAPBOX_TOKEN}
                interactiveLayerIds={['data']}              
            >
        
        
      </Map>
        </div>
    )
}

export default BMap;