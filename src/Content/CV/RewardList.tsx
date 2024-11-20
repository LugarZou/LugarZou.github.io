import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';
import CalculateIcon from '@mui/icons-material/Calculate';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ComputerIcon from '@mui/icons-material/Computer';

export default function RewardList() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://hpcgame.pku.edu.cn/">
              <ListItemIcon>
                <CalculateIcon />
              </ListItemIcon>
              <ListItemText primary="2024 PKU High-Performance Computing Game" />
              <ListItemText primary="3rd Prize" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ComputerIcon />
              </ListItemIcon>
              <ListItemText primary="2024 PKU Award for Scientific Research" />          
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <CardGiftcardIcon />
              </ListItemIcon>
              <ListItemText primary="2024 The Okamatsu Scholarship" />          
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://hpcgame.pku.edu.cn/">
              <ListItemIcon>
                <CalculateIcon />
              </ListItemIcon>
              <ListItemText primary="2023 PKU High-Performance Computing Game" />
              <ListItemText primary="3rd Prize" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}