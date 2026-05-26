import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EducationTimeline, ResearchTimeline } from './CVtimeline';
import RewardList from './RewardList';
import LanguageList from './LanguageList';

import SchoolIcon from '@mui/icons-material/School';
import BiotechIcon from '@mui/icons-material/Biotech';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TranslateIcon from '@mui/icons-material/Translate';
import BuildIcon from '@mui/icons-material/Build';

const theme = createTheme({
    typography: {
        subtitle1: {
            fontFamily: 'Times New Roman',
            fontSize: 18,
            // Other typography properties can be set here as well
        },
        h2: {
            fontFamily: 'Playfair Display',
            fontSize: 60,
        },
        h4: {
            fontFamily: 'Times New Roman',
            fontSize: 40,
        },
        h5: {
            fontFamily: 'Times New Roman',
            fontSize: 30,
        },
        h6: {
            fontFamily: 'Times New Roman',
            fontSize: 22,
        },
        body1: {
            fontFamily: 'Times New Roman',
        },
        body2: {
            fontFamily: 'Times New Roman',
        },
        button: {
            fontFamily: 'Times New Roman',
            fontSize: 16,
        },
    },
});

const UnderPaper = styled(Paper)(({ theme }) => ({
    overflow: 'auto',
    maxHeight: "85vh",
    padding: theme.spacing(2),
    ...theme.typography.body2,

}));
export default function CV() {

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ justifyContent: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                        <UnderPaper>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h2">Lutong (Lugar) Zou</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <EmailIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Personal Info</Typography>
                                    </Grid>
                                    <Typography variant="subtitle1">
                                        Address: Beijing, China
                                        <br />
                                        Email: xjqrxjqr@gmail.com
                                    </Typography>
                                </Grid>

                                {/*<Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <PeopleAltIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Profile</Typography>
                                    </Grid>
                                    <Typography variant="subtitle1">
                                        I am currently an undergraduate student affiliated with the School of EECS @ Peking University.<br />
                                        My research interests embrace the broad field of Machine Learning, especially on the following branches:
                                    </Typography>
                                    <Typography variant="subtitle1">Reinforcement Learning, Deep Learning(GNN), Healthcare Application</Typography>
                                </Grid>*/}

                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <SchoolIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Education</Typography>

                                    </Grid>
                                    <EducationTimeline />
                                </Grid>

                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <BiotechIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Research</Typography>
                                    </Grid>
                                    <ResearchTimeline />
                                </Grid>

                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <TranslateIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Languages</Typography>
                                    </Grid>
                                    <LanguageList />
                                </Grid>

                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <EmojiEventsIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Awards</Typography>
                                    </Grid>
                                    <RewardList />
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <BuildIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Tools</Typography>
                                    </Grid>
                                    <ul>
                                        <li>
                                            <Typography variant="subtitle1">Python, PyTorch</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1">C, C++</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="subtitle1">Typescript, React</Typography>
                                        </li>
                                    </ul>
                                </Grid>

                            </Grid>
                        </UnderPaper>
                    </Grid>
                </Grid>
            </Container >
        </ThemeProvider>
    )
}
