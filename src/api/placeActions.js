const getPlacesData = (type, sw, ne) => {
  return {
    url: `${type}/list-in-boundary`,
    method: 'GET',
    params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
    },
  };
};

const placeActions = { getPlacesData };
export default placeActions;
