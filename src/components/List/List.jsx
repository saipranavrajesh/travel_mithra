import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

function List({ places, childClicked, isLoading, type, setType, rating, setRating }) {

  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places])

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "type-select": {
        setType(value);
        break;
      }
      case "rating-select": {
        setRating(value);
        break;
      }
      default: break
    }
  }
  return (
    <div className='container'>
      <Typography variant="h4">Restaurant, Hotels & Attractions around you</Typography>
      {
        isLoading ?
          <div className="loading">
            <CircularProgress size="5rem" />
          </div> : (
            <>
              <FormControl className="formControl">
                <InputLabel id="type-label">Type</InputLabel>
                <Select name="type-select" labelId="type-label" value={type} label="type" id="type" onChange={handleChange}>
                  <MenuItem value={"restaurants"}>Restaurants</MenuItem>
                  <MenuItem value={"hotels"}>Hotels</MenuItem>
                  <MenuItem value={"attractions"}>Attractions</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="formControl">
                <InputLabel id="rating-label">Rating</InputLabel>
                <Select name="rating-select" labelId="rating-label" id="rating" label="rating" value={rating} onChange={handleChange}>
                  <MenuItem value={"0"}>All</MenuItem>
                  <MenuItem value={"3"}>Above 3.0</MenuItem>
                  <MenuItem value={"4"}>Above 4.0</MenuItem>
                  <MenuItem value={"4.5"}>Above 4.5</MenuItem>
                </Select>
              </FormControl>
              <Grid container spacing={3} className="list">
                {
                  places?.map((place, i) => (
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                      <PlaceDetails place={place} selected={Number(childClicked) === i} refProp={elRefs[i]} />
                    </Grid>
                  ))
                }
              </Grid>
            </>
          )}
    </div>
  )
};

export default List
