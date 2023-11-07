import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/material/styles';

const UnderPaper = styled(Paper)(({ theme }) => ({
    width: 1000,
    padding: theme.spacing(2),
    ...theme.typography.body2,

}));


export default function CV() {

    return (
        <Container sx={{ justifyContent: "center" }}>
            <UnderPaper>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Lutong (Lugar) Zou</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">Personal Info</Typography>
                        <Typography>
                            Address: Beijing, China
                            <br />
                            Email: bbf@stu.pku.edu.cn
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">Profile</Typography>
                        <Typography>
                            I am currently an undergraduate student affiliated with the School of Computer Science at Peking University.
                        </Typography>
                        <Typography>
                            My research interests embrace the broad field of Machine Learning, especially on the following branches:
                        </Typography>
                        <ul>
                            <li>
                                <Typography>
                                    ML on relational data such as graphs and relational databases.
                                </Typography>
                            </li>
                            <li>
                                <Typography>Multi-modal Learning</Typography>
                            </li>
                            <li>
                                <Typography>ML combined with System</Typography>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </UnderPaper>
        </Container>
    )
}