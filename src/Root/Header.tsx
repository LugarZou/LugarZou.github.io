import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const scholarUrl = 'https://scholar.google.com/citations?user=rWwSkGoAAAAJ&hl=en';

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', minHeight: '64px' }}>
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, margin: 'auto'}}
          fontFamily={'Playfair Display'}
        >
          {title}
        </Typography>
        <IconButton
          component="a"
          href={scholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
        >
          <SchoolIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            to={section.url}
            underline="none"
            component={RouterLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
