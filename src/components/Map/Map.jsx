import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';

function Map({ coordinates, setCoordinates, setBounds, places, setChildClicked }) {
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <div className='mapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_SECRET }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => (setChildClicked(child))}
      >
        {places?.map((place, i) => (
          <div
            className='markerContainer'
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              !isDesktop ? (<LocationOnOutlinedIcon color="primary" fontSize="large" />) : (
                <Paper elevation={3} className='paper'>
                  <Typography className='typography' variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img className='pointer' src={place.photo ? place.photo.images.large.url : ''} alt={place.name} />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
};

export default Map
