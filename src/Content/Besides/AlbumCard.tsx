import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import albumCover from '../../Images/bird_zhangdaqian.jpg';

type AlbumItem = {
  img: string;
  title: string;
};

const albumPhotoContext = (require as any).context(
  '../../Images',
  false,
  /^\.\/AlbumPhoto.*\.(png|jpe?g|webp)$/i,
);

const albumItems: AlbumItem[] = albumPhotoContext
  .keys()
  .sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key: string) => {
    const src = albumPhotoContext(key) as string;
    const title = key.replace('./', '').replace(/\.[^.]+$/, '');
    return { img: src, title };
  });

export default function AlbumCard() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Card sx={{ display: 'flex', mt: 1, maxWidth: 340}}>
        <CardActionArea onClick={() => setOpen(true)}>
          <Box sx={{ display: 'flex', minHeight: 180 }}>
            <CardContent sx={{ width: '40%', py: 1.5, px: 1.5 }}>
              <Typography variant="h6" gutterBottom>
                相册 Album
              </Typography>
              <Typography variant="body2" color="text.secondary">
                有些是我拍的，有些是我的朋友拍的。<br/>知名不具。<br />
                Photos by me and friends. 
              </Typography>
              <Button size="small" sx={{ mt: 1 }}>
                让我看看！Open ImageList
              </Button>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: '60%', objectFit: 'cover' }}
              image={albumCover}
              alt="Album cover"
            />
          </Box>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: {
            width: 'min(1600px, 98vw)',
            maxWidth: 'none',
          },
        }}
      >
        <DialogTitle>Album</DialogTitle>
        <DialogContent>
          <ImageList variant="masonry" cols={isDesktop ? 3 : 2} gap={10}>
            {albumItems.map((item) => (
              <ImageListItem key={item.title}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', display: 'block' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
