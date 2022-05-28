export const layerStyle = {
    id: "area",
    type: "fill",
    paint: {
    "fill-outline-color": "black",
    'fill-color': {
        property: 'totalProUsers',
        stops: [
            [90,"#A0FDEC"],
            [120,"#A0F6FD"],
            [150,"#A0DDFD"],
            [180,'#03A7FF'],
            [220,"#0375FF"],
            [250,"#0329FF"],
            [280,"#021DB3"],
            [300,"#02157E"]
        ]
    }}
};

