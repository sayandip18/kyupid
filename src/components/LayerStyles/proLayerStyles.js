export const proStyle = {
    id: "area",
    type: "fill",
    paint: {
    "fill-outline-color": "black",
    'fill-color': {
        property: 'totalProUsers',
        stops: [
            [60,"#A0FDEC"],
            [70,"#A0F6FD"],
            [80,"#A0DDFD"],
            [90,'#03A7FF'],
            [100,"#0375FF"],
            [120,"#0329FF"],
            [130,"#021DB3"],
            [140,"#02157E"]
        ]
    }}
};
