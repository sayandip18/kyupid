import React from 'react';

import './Dashboard.css';

function Dashboard({data}) {
    return (
        <div className="dashboard">
            Area: {data.areaName}
            Pro users: {data.totalPro}
            General users: {data.totalGeneral}
            Male users: {data.male}
            Female users: {data.female}
            Total matches: {data.totalMatches}
        </div>
    )
}

export default Dashboard;