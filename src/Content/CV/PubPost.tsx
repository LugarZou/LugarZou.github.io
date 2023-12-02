import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Button, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface PubPostProps {
  post: {
    author_before: string;
    author_me: string;
    author_after: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    published_where: string;
    ref_address: string;
  };
}

interface ContentLinkProps {
  where: string;
  href: string;
}

function ContentLink(props: ContentLinkProps) {
  const { where, href } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (where === "In Submission") {
    return (
      <React.Fragment>
        <Button variant="contained" size="medium" color="primary" onClick={handleClickOpen}>
          {where}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Sorry, this paper is still in submission."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Due to various confidentiality agreements, I regret that I cannot publicly share this paper.
              Nevertheless, I would be delighted to discuss our findings with you <strong>in person</strong>.<br/>
              But you can still check our arxiv version <a href={href}>here</a>.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Noted</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
  else {
    return (
      <Button size="small" color="primary" href={href}>
        {where}
      </Button>
    )
  }
}

export default function PubPost(props: PubPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {post.author_before}<strong>{post.author_me}</strong>{post.author_after}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {post.description}
          </Typography>
          <CardActions>
            <ContentLink where={post.published_where} href={post.ref_address} />
          </CardActions>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          image={post.image}
          alt={post.imageLabel}
        />
      </Card>
    </Grid>
  );
}
