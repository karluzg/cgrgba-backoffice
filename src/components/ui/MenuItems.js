import * as React from 'react';
import Divider from '@mui/material/Divider';
import GroupIcon from '@mui/icons-material/Group';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import MenuItem from './MenuItem';


export default function MenuItems () {
  return (
    <React.Fragment>
    <MenuItem icon={< CalendarMonthIcon />} description='Gestão de agendamentos' />
    <MenuItem icon={< GroupIcon/>} description='Gestão de utilizadores'/>
    <MenuItem icon={< LanguageIcon/>} description='Gestão do portal'/>
    <Divider sx={{ my: 1 }} />
    <MenuItem icon={<PermIdentityIcon />} description='Josefina Kosta' />
  </React.Fragment>
  );
}