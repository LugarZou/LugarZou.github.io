import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import background from '../Images/Background_alex_suprun.jpg';

const sections = [
  { title: 'Overview', url: '/' },
  { title: 'Cirriculum Vitae', url: 'CV' },
  { title: 'Showcase', url: 'Showcase' },
  /*{ title: 'Working Ethics', url: '#' },
  { title: 'Acknowledgment', url: 'Ack' },*/
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Root() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Header title="Lugar Zou" sections={sections} />
        <div id="detail">
          <Outlet />
        </div>
      </Container>
      <Footer
        title="Acknowledgment"
      />
    </ThemeProvider>
  );
}