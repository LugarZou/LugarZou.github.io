import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EducationTimeline, ResearchTimeline } from './CVtimeline';
import FeaturedPost from './PubPost';
import RewardList from './RewardList';
import LanguageList from './LanguageList';

import SchoolIcon from '@mui/icons-material/School';
import BiotechIcon from '@mui/icons-material/Biotech';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
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

const PubPosts = [
    {
        title: 'Mediator-Based Reward Design in Online Contextual Bandit',
        author_before: '',
        author_me: "Lutong Zou",
        author_after: ", Ziping Xu, Daiqi Gao, Susan Murphy",
        description:
            'This paper proposes a framework that constructs surrogate rewards based on mediators between actions and rewards, informed by expert-provided causal directed acyclic graphs (DAGs).',
        image: 'https://github.com/LugarTang/LugarTang.github.io/blob/master/src/Images/Process.png?raw=true',
        imageWidth: 400,
        imageLabel: 'Image Text',
        published_where: "RLDM 2025 Spotlight",
        ref_address: "https://github.com/LugarZou/LugarZou.github.io/blob/master/src/Images/RLDMCamera_ready.pdf",
    },
    {
        title: 'RDBench: ML Benchmark for Relational Databases',
        author_before: 'Zizhao Zhang*, Yi Yang*, ',
        author_me: "Lutong Zou*",
        author_after: ", He Wen*, Tao Feng, Jiaxuan You",
        description:
            'We introduced ML Benchmark For Relational Databases (RDBench), aiming to promote reproducible ML research on RDBs that include multiple tables.',
        image: 'https://github.com/LugarTang/LugarTang.github.io/blob/master/src/Images/OverviewRDB.png?raw=true',
        imageWidth: 600,
        imageLabel: 'Image Text',
        published_where: "Arxiv",
        ref_address: "https://arxiv.org/pdf/2310.16837v1",
    },
];

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

                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <HistoryEduIcon sx={{ fontSize: 60 }} />
                                        <Typography variant="h4" style={{ marginLeft: '10px' }}>Projects</Typography>
                                    </Grid>
                                    <Grid container spacing={4}>
                                        {PubPosts.map((post) => (
                                            <FeaturedPost key={post.title} post={post} />
                                        ))}
                                    </Grid>
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