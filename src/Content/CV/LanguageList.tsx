import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function LanguageList() {
    let marginal_space: number = 4;

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>

                    <ListItem disablePadding>
                        <Rating name="read-only" value={5} readOnly />
                        <Box ml={marginal_space}> {/* Adjust the ml (margin-left) value as needed */}
                            <Typography variant="subtitle1">
                                很高兴能和大家用我的母语交流！✅
                            </ Typography>
                        </Box>
                    </ListItem>
                    <Divider />

                    <ListItem disablePadding>
                        <Rating name="read-only" value={4} readOnly />
                        <Box ml={marginal_space}> {/* Adjust the ml (margin-left) value as needed */}
                            <Typography variant="subtitle1">
                                English serves as my primary working language😉. Test score: TOEFL-iBT 107
                            </ Typography>
                        </ Box>
                    </ListItem>
                    <Divider />

                    <ListItem disablePadding>
                        <Rating name="read-only" value={2} readOnly />
                        <Box ml={marginal_space}> {/* Adjust the ml (margin-left) value as needed */}
                            <Typography variant="subtitle1">
                                Je suis actuellement en train d'étudier le français😘.
                            </ Typography>
                        </ Box>
                    </ListItem>
                    <Divider />

                </List>
            </nav>
        </Box>
    )
}