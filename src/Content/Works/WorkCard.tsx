import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import { Button, CardActions, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { WorkEntry, WorkKind } from './WorkData';

interface WorkCardProps {
  work: WorkEntry;
}

interface ContentLinkProps {
  where: string;
  href: string;
}

const kindStyles: Record<WorkKind, { backgroundColor: string; color: string }> = {
  Publication: {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
  },
  Preprint: {
    backgroundColor: '#b91c1c',
    color: '#ffffff',
  },
  Workshop: {
    backgroundColor: '#15803d',
    color: '#ffffff',
  },
  Project: {
    backgroundColor: '#7c3aed',
    color: '#ffffff',
  },
};

function ContentLink(props: ContentLinkProps) {
  const { where, href } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (where === 'In Submission') {
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
            {'Sorry, this paper is still in submission.'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Due to various confidentiality agreements, I regret that I cannot publicly share this paper.
              Nevertheless, I would be delighted to discuss our findings with you <strong>in person</strong>.<br />
              But you can still check our arxiv version <a href={href}>here</a>.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Noted</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

  return (
    <Button variant="contained" size="medium" color="primary" href={href}>
      {where}
    </Button>
  );
}

export default function WorkCard(props: WorkCardProps) {
  const { work } = props;
  const kindStyle = kindStyles[work.kind];

  return (
    <Grid item xs={12} md={12}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }} useFlexGap flexWrap="wrap">
            <Chip
              label={work.kind}
              size="small"
              sx={{
                backgroundColor: kindStyle.backgroundColor,
                color: kindStyle.color,
                fontWeight: 600,
              }}
            />
          </Stack>
          <Typography variant="h5">
            {work.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {work.author_before}<strong>{work.author_me}</strong>{work.author_after}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {work.description}
          </Typography>
          <CardActions sx={{ px: 0 }}>
            <ContentLink where={work.published_where} href={work.ref_address} />
          </CardActions>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: work.imageWidth, height: 300, display: { xs: 'none', sm: 'block' }, objectFit: 'fill' }}
          image={work.image}
          alt={work.imageLabel}
        />
      </Card>
    </Grid>
  );
}
