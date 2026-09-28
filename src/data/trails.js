// Derived directly from traildata/track.json and the corresponding OSM way files.
// Images are bundled locally so trail cards work without a network connection.
export const trails = [
  {
    id: 'way-139929540', osmId: 139929540, name: 'New Richmond Swing Bridge', difficulty: 'Easy', distance: '0.11 km', elevation: '11 m', time: '2 min',
    image: require('../../traildata/imgs/New-Richmond-Swing-Bridge-way-139929540.jpg'),
    description: 'bridge in United States of America', coords: { latitude: 42.6514365, longitude: -86.106755 }, osmUrl: 'https://www.openstreetmap.org/way/139929540',
    geometry: [{ latitude: 42.6509375, longitude: -86.1066273 }, { latitude: 42.6510703, longitude: -86.1066747 }, { latitude: 42.651661, longitude: -86.1068168 }, { latitude: 42.6519354, longitude: -86.1068827 }],
  },
  {
    id: 'way-242747227', osmId: 242747227, name: 'Brookside Park Bridge', difficulty: 'Easy', distance: '0.03 km', elevation: '0 m', time: '1 min',
    image: require('../../traildata/imgs/Brookside-Park-Bridge-way-242747227.png'),
    description: 'Historic pedestrian bridge spanning Big Creek in Cleveland Metroparks, Cleveland, Ohio.', coords: { latitude: 41.4488755, longitude: -81.7172264 }, osmUrl: 'https://www.openstreetmap.org/way/242747227',
    geometry: [{ latitude: 41.4488109, longitude: -81.7173789 }, { latitude: 41.4489401, longitude: -81.7170739 }],
  },
  {
    id: 'way-327331027', osmId: 327331027, name: 'McKeown Road Bridge', difficulty: 'Easy', distance: '0.04 km', elevation: '0 m', time: '1 min',
    image: require('../../traildata/imgs/McKeown-Road-Bridge-way-327331027.jpg'),
    description: 'Wood-deck pedestrian bridge in Barry County, Michigan, suitable for foot traffic.', coords: { latitude: 42.6156837, longitude: -85.2363275 }, osmUrl: 'https://www.openstreetmap.org/way/327331027',
    geometry: [{ latitude: 42.6155059, longitude: -85.2363287 }, { latitude: 42.6158614, longitude: -85.2363262 }],
  },
  {
    id: 'way-352524292', osmId: 352524292, name: 'West Orange Road-Thomas Bridge', difficulty: 'Easy', distance: '0.06 km', elevation: '0 m', time: '1 min',
    image: require('../../traildata/imgs/West-Orange-Road-Thomas-Bridge-way-352524292.jpg'),
    description: 'bridge in United States of America', coords: { latitude: 40.1753378, longitude: -83.0455562 }, osmUrl: 'https://www.openstreetmap.org/way/352524292',
    geometry: [{ latitude: 40.1753173, longitude: -83.0459355 }, { latitude: 40.1753582, longitude: -83.0451769 }],
  },
];
export const difficultyColor = { Easy: '#3D806A', Moderate: '#B36B16', Hard: '#B54F42' };
