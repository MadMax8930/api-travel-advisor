import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width: 600px)');

  return (
    <div className={classes.mapContainer}>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20955.85644620343!2d2.5228927!3d48.96334745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61456bd970c23%3A0x203ec108eca76e70!2sibis%20Villepinte%20Parc%20Expos!5e0!3m2!1sen!2sfr!4v1681648333504!5m2!1sen!2sfr" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      <GoogleMapReact
         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
         defaultCenter={coordinates}
         center={coordinates}
         defaultZoom={14}
         margin={[50, 50, 50, 50]}
         options={''}
         onChange={(e) => { 
            console.log('event', e);
            setCoordinates({ lat: e.center.lat, lng: e.center.lng }); 
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
         }}
         onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;