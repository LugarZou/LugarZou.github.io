import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import selfPic from '../../Images/PosterPic.png';

interface MainFeaturedPostProps {
  post: {
    description: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'transparent',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={7}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h2" color="inherit" sx={{ fontFamily: "Helvetica Neue" }} gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h4" color="inherit" sx={{ whiteSpace: 'pre-line', fontFamily: "sans-serif" }} paragraph>
              {post.description}
            </Typography>
            <ul>
              <li>
                <Typography variant="h5">ML on Health Decision - Now I'm working on Reinforcement Learning on Digital Intervention</Typography>
              </li>
              <li>
                <Typography variant="h5">Interpret data in a structured, explicable way</Typography>
              </li>
              <li>
                <Typography variant="h5">How can we justify methods: Statistics, Causal Inference</Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box
            sx={{
              position: 'relative',
              p: 3,
              pr: 0,
            }}
          >
            <img
              style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
              src={selfPic}
              alt={post.imageText}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
