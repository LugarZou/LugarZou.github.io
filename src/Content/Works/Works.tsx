import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Typography, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkCard from './WorkCard';
import { workTopics } from './WorkData';

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CategoryIcon from '@mui/icons-material/Category';

const theme = createTheme({
    typography: {
        subtitle1: {
            fontFamily: 'Times New Roman',
            fontSize: 18,
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
    maxHeight: '85vh',
    padding: theme.spacing(2),
    ...theme.typography.body2,
}));

export default function Works() {
    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth={false}
                sx={{
                    justifyContent: 'center',
                    px: { xs: 2, md: 4, lg: 6 },
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                        <UnderPaper>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h2">Works</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">
                                        This page is organized by topic rather than by publication format. For a more traditional paper list, please check my{' '}
                                        <Link href="https://scholar.google.com/citations?user=rWwSkGoAAAAJ&hl=en" underline="hover">
                                            Google Scholar profile
                                        </Link>{' '}
                                        through the icon at the upper right.
                                    </Typography>
                                </Grid>

                                {workTopics.map((topic) => (
                                    <Grid item xs={12} key={topic.title}>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="flex-end"
                                        >
                                            {topic.title === 'Miscellaneous' ? (
                                                <CategoryIcon sx={{ fontSize: 60 }} />
                                            ) : (
                                                <HistoryEduIcon sx={{ fontSize: 60 }} />
                                            )}
                                            <Typography variant="h4" style={{ marginLeft: '10px' }}>
                                                {topic.title}
                                            </Typography>
                                        </Grid>
                                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                            {topic.description}
                                        </Typography>
                                        <Grid container spacing={4}>
                                            {topic.works.map((work) => (
                                                <WorkCard key={work.title} work={work} />
                                            ))}
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </UnderPaper>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
