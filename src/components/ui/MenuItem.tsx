import { Link, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { IMenuItem } from './../interface/IMenuItem';
import React from 'react';

const MenuItem = ({icon, description, link}:IMenuItem) => {

  return (
    <React.Fragment>
      <Link href={link}>
        <ListItemButton>
              <ListItemIcon>
                  {icon}
              </ListItemIcon>
              <ListItemText primary={description} />
          </ListItemButton>
      </Link>
        
    </React.Fragment>
  )
}

export default MenuItem;
