import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from './Typography';
import algorithmImage from '../../Images/algorithm.jpeg';
import mathImage from '../../Images/math.webp';
import frontendImage from '../../Images/frontend_jackson_sophat.jpg';
import visionImage from '../../Images/vision.jpg';
import dataImage from '../../Images/data.jpg';
import ecoImage from '../../Images/econo_dmytro_demidko.jpg';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    /*url: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400',*/
    url: algorithmImage,
    title: 'Classic Algorithm',
    width: '40%',
  },
  {
    url: ecoImage,
    title: 'Economics',
    width: '20%',
  },
  {
    /*url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400',*/
    url: mathImage,
    title: 'Basic Math',
    width: '40%',
  },
  {
    /* url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400',*/
    url: frontendImage,
    title: 'Front End',
    width: '38%',
  },
  {
    url: dataImage,
    title: 'Data Mining',
    width: '38%',
  },
  {
    url: visionImage,
    title: 'Computer Vision',
    width: '24%',
  },
  /*
  {
    url: 'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400',
    title: 'Walking',
    width: '40%',
  },
  {
    url: 'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400',
    title: 'Fitness',
    width: '20%',
  },
  {
    url: 'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400',
    title: 'Reading',
    width: '40%',
  },*/
];

function SkillAlbum() {
  return (
    <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image) => (
        <ImageIconButton
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundImage: `url(${image.url})`,
            }}
          />
          <ImageBackdrop className="imageBackdrop" />
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'common.white',
            }}
          >
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className="imageTitle"
            >
              {image.title}
              <div className="imageMarked" />
            </Typography>
          </Box>
        </ImageIconButton>
      ))}
    </Box>
  )
}

export default function ProductCategories() {
  return (
    <Container maxWidth={false} style={{ maxHeight: '85vh', overflow: 'scroll', marginRight: "-50px", paddingRight: '100px',
    }} >
      <Typography variant="h4" marked="center" align="center" component="h2" style={{ fontFamily: 'Parisienne', fontSize: 80 }}>
        For all tastes and all desires
      </Typography>
      <SkillAlbum />
    </Container>
  );
}
