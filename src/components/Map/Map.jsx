import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import mapStyles from './mapStyles';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
   const classes = useStyles();
   const isDesktop = useMediaQuery('(min-width: 600px)');

  return (
    <div className={classes.mapContainer}>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320369.20572566276!2d71.14975410719227!3d51.14748245542033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47db54609%3A0x97f9148dddb19228!2sAstana%20020000%2C%20Kazakhstan!5e0!3m2!1sen!2sfr!4v1681679812948!5m2!1sen!2sfr" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      <GoogleMapReact
         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
         defaultCenter={coordinates}
         center={coordinates}
         defaultZoom={14}
         margin={[50, 50, 50, 50]}
         options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
         onChange={(e) => { 
            console.log('event', e);
            setCoordinates({ lat: e.center.lat, lng: e.center.lng }); 
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
         }}
         onChildClick={(child) => setChildClicked(child)}
      >
         {places?.map((place, i) => (
            <div key={i} lat={Number(place.latitude)} lng={Number(place.longitude)} className={classes.markerContainer}> 
               {isDesktop 
                     ? (<LocationOnOutlinedIcon color="primary" fontSize="large" />) 
                     : (<Paper elevation={3} className={classes.paper}>
                           <Typography gutterBottom variant="subtitle2" className={classes.typography}>
                              {place.name}
                           </Typography>
                           <img className={classes.pointer} 
                                 src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
                                 alt={place.name} 
                           />
                           <Rating size="small" value={Number(place.rating)} readOnly />
                        </Paper>)
               }
            </div>
         ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;