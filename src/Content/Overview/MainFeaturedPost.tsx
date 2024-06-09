import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
                <Typography variant="h5">ML4Science: I'm currently working on RL4MobileHealth</Typography>
              </li>
              <li>
                <Typography variant="h5">ML on relational data such as graphs and relational databases</Typography>
              </li>
              <li>
                <Typography variant="h5">ML Theory: I have an interest in questions like</Typography>
                <ul>
                  <li>
                    <Typography variant="h5">Why does a certain ML method work well?</Typography>
                  </li>
                  <li>
                    <Typography variant="h5">What principles should we adhere to when designing new ML methods?</Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
