import React from 'react';

import './Dashboard.css';

function Dashboard({data}) {
    return (
        <div className="dashboard">
            <div>Area: {data.areaName}</div>
            <div>Pro users: {data.totalPro}</div>
            <div>General users: {data.totalUsers}</div>
            <div>Male users: {data.male}</div>
            <div>Female users: {data.female}</div>
            <div>Total matches: {data.totalMatches}</div>      
        </div>
    )
}

export default Dashboard;