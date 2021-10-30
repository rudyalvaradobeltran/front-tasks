import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { NavBarMenuItems } from '../../../config/NavBarMenuItems';

const Menu = (ToggleDrawer) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={ToggleDrawer(false)}
      onKeyDown={ToggleDrawer(false)}
    >
      <List>
        {NavBarMenuItems.map((item) => (
          <ListItem
            button
            key={item.name}
            to={`/${item.href}`}
            component={Link}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Menu;