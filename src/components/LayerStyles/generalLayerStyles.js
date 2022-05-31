export const generalStyle = {
    id: "area",
    type: "fill",
    paint: {
    "fill-outline-color": "black",
    'fill-color': {
        property: 'totalGeneralUsers',
        stops: [
            [100,"#E9A2FE"],
            [120,"#DE6CFF"],
            [140,"#CE29FF"],
            [160,"#B202E5"],
            [180,"#9001BA"],
            [200,"#7C01A0"],
            [220,"#5D0178"],
            [240,"#440158"],
            [260,"#1E0027"],
            [280,"#240027"]
        ]
    }}
};