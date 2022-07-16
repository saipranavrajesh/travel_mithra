import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function PlaceDetails({ place, selected, refProp }) {
  if(selected) {
    refProp?.current?.scrollIntoView({behavior:'smooth', block:'start' })
  }
  return (
    <Card elevation={6}>
      <CardMedia
        sx={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : ''}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <span>{place.distance_string}</span>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Rating name="read-only"  value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>

        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>

        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {/* {place?.awards?.map((award) => (
          <Box my={1} sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography color="textSecondary" variant="subtitle2">{award.display_name}</Typography>
          </Box>
        ))} */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className="chip" />
        ))}
        {place?.address && (
          <Typography my={1} gutterBottom variant="body2" color="textSecondary" sx={{display:'flex'}}>
            <LocationOnIcon/><span style={{display:'flex', alignItems:'flex-end', paddingLeft:'5px'}}>{place.address}</span>
          </Typography>
        )}
            {place?.phone && (
          <Typography my={1} gutterBottom variant="body2" color="textSecondary" sx={{display:'flex'}}>
            <PhoneIcon/><span style={{display:'flex', alignItems:'flex-end', paddingLeft:'5px'}}>{place.phone}</span>
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  )
};

export default PlaceDetails
