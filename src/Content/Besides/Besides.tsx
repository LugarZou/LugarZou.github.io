import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaControlCard from './MediaCard';

const Besides: React.FC = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h3" gutterBottom align="center">
                此外 Besides
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="stretch">
                <Grid item xs={12} md={4} sx={{ mt: 0 }}>
                    <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                        <Typography variant="h6">
                            到底是一个侧重于专业的主页，所以给这一页取名叫「此外」。但人不是由某个主要方面再加上几个次要方面定义的，人是「横看成岭侧成峰」的存在。<br />
                            This page is named "Besides" because this site focuses on my professional side, but a person is not defined by one main aspect plus a few secondary ones. A person is a multifaceted existence, seen from different angles.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} sx={{ mt: 6 }}>
                    <MediaControlCard />
                </Grid>
                {/* <Grid item xs={12} md={5} sx={{ mt: 4 }}>
                    <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                        <Typography variant="h5">以恒 Stick to</Typography>
                        <Typography variant="body1" color="text.secondary">
                            说来又私人又像自夸，但实是我挣扎坚持之事。只求落于文字，心下清明。<br />
                            This is both personal and a bit boastful, but it is something I struggle to stick to. I just want to put it into words so it's clear in my mind.<br />
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            - 限饮：从2025年5月26日19时46分开始，我只喝水、茶、咖啡、牛奶、椰子水、纯果汁。<br />
                            - Beverage Limit: Starting from May 26, 2025, at 19:46, I will only drink water, tea, coffee, milk, coconut water and 100% juice.<br />
                        </Typography>
                    </Paper>
                </Grid> */}
                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                    <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                        <Typography variant="h5">春风夜雨 Friends</Typography>
                        <Typography variant="body1" color="text.secondary">
                            山谷这两句诗早就给人用滥了，奈何写得太好，实在不能割舍。未共醉春风者谈论当时夜雨多少显得虚伪，而无孤灯挑尽之思者到底流于轻浮。率意独驾，不由径路，幸与诸君历久，未效穷途之哭。<br />
                            This paragraph is too sentimental and literary to translate, but luckily, I am the author, so I'll just re-express it through the lens of English culture:<br />
                            <em>
                                "And he is your board and your fireside.<br />
                                For you come to him with your hunger, and you seek him for peace."
                            </em> Khalil Gibran On Friendship<br/>
                            I am grateful for the friends who have been with me through thick and thin.<br/>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Besides;