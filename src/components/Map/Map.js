import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Map, {Source, Layer} from 'react-map-gl';

import {layerStyle} from '../LayerStyles/LayerStyles';
import Dashboard from '../Dashboard/Dashboard';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function KyupidMap() {
    const [area, setArea] = useState();
    const [user, setUser] = useState();
    const [showDashboard, setDashboard] = useState(false);
    const [areaStats, setAreaStats] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await axios.get('https://kyupid-api.vercel.app/api/users');
            const areaData = await axios.get('https://kyupid-api.vercel.app/api/areas');

            let areaWise = {};

            let users = usersData.data.users;
            let pro = users.filter(user => user.is_pro_user);

            let total = users.length;
            let totalMale = users.filter(user => user.gender === 'M').length;
            let totalFemale = users.filter(user => user.gender === 'F').length;
            let totalMatches = users.filter(user => user.total_matches).length;

            let totalPro = pro.length;
            let totalProMale = pro.filter(user => user.gender === 'M').length;
            let totalProFemale = pro.filter(user => user.gender === 'F').length;
            let totalProMatches = pro.filter(user => user.total_matches).length;

            let totalRevPc = ((totalPro / total) * 100).toFixed(2);

            users.forEach(user => {
                if(!(user.area_id in areaWise)){
                    areaWise[user.area_id] = {
                        "total_users": 0,
                        "pro_users": 0,
                        "pro_male": 0,
                        "pro_female": 0,
                        "male": 0,
                        "female": 0,
                        "total_matches": 0,
                        "total_pro_matches": 0,
                        "rev_pc": 0,

                    }
                }
                else {
                    areaWise[user.area_id]["total_users"]++;
                    if(user.gender === "M") areaWise[user.area_id]["male"]++;
                    else areaWise[user.area_id]["female"]++;
                    if(user.total_matches) areaWise[user.area_id]["total_matches"]++;

                    if(user.is_pro_user) {
                        areaWise[user.area_id]["pro_users"]++;
                        if(user.gender === "M") areaWise[user.area_id]["pro_male"]++;
                        else areaWise[user.area_id]["pro_female"]++;
                        if(user.total_matches) areaWise[user.area_id]["total_pro_matches"]++;
                        areaWise[user.area_id]["rev_pc"] = ((areaWise[user.area_id]["pro_users"]/pro.length)*100).toFixed(2);
                    }

                    
                }
            })

            areaWise[0] = {
                "total_users": total,
                "pro_users": totalPro,
                "pro_male": totalProMale,
                "pro_female": totalProFemale,
                "male": totalMale,
                "female": totalFemale,
                "total_matches": totalMatches,
                "total_pro_matches": totalProMatches,
                "rev_pc": totalRevPc,
            }

            setUser(areaWise);

            areaData.data["features"].forEach((area) => {
                area["properties"]["totalProUsers"] = areaWise[area.properties.area_id]["total_users"];
                area["properties"]["totalGeneralUsers"] = areaWise[area.properties.area_id]["pro_users"];
            })

            setArea(areaData.data);
        };

        fetchData();
    }, [])

    const onHover = e => {
        const areaID = e.features[0].properties.area_id;
        setDashboard(!showDashboard);
        setAreaStats({
            areaName: e.features[0].properties.name,
            totalUsers: user[areaID].total_users,
            male: user[areaID].male,
            female: user[areaID].female,
            totalPro: user[areaID].pro_users,
            proMale: user[areaID].pro_male,
            proFemale: user[areaID].pro_female,
            totalMatches: user[areaID].total_matches,
        })
        console.log(user[areaID]);
    }

    return (
        <div style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}>
            <Map
                doubleClickZoom={false}
                initialViewState={{
                    latitude: 12.89,
                    longitude: 77.47,
                    zoom: 9,
                    pitch:45,
                    bearing: 340,
                }}
                mapStyle={"mapbox://styles/mapbox/dark-v9"}
                interactiveLayerIds={["area"]}
                mapboxAccessToken={MAPBOX_TOKEN}
                onClick={onHover}    
            >
                {area && <Source type="geojson" data={area}>
                    <Layer {...layerStyle} />
                </Source>}
            </Map>
            {showDashboard && areaStats && <Dashboard data={areaStats} />}
        </div>
    )
}

export default KyupidMap;