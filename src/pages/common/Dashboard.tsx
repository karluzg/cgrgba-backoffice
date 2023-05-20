import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Footer from '../../components/ui/Footer';
import MenuItem from '../../components/ui/MenuItem';
import GroupIcon from '@mui/icons-material/Group';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';

import styles from './../../assets/css/dashboard.module.scss';


import { PageCode } from '../../utils/PageCode';


import SignUp from '../users/SignUp';
import SignIn from '../users/SignIn';
import ChangeInitialPassword from '../users/ChangeInitialPassword';
import AddTimeSlots from '../scheduling/AddTimeSlots';
import ListTimeSlots from '../scheduling/ListTimeSlots';
import AddScheduling from '../scheduling/AddScheduling';
import ListSchedulings from '../scheduling/ListSchedulings';
import SchedulingDetails from '../scheduling/SchedulingDetails';
import ChangeSchedulingData from '../scheduling/ChangeSchedulingData';
import AddNews from '../portal/AddNews';
import ListNews from '../portal/ListNews';
import HomePage from '../common/HomePage';
import PageNotFound from '../common/PageNotFound';


function getStepContent(page: PageCode) {
    switch (page) {
        case PageCode.SIGN_UP:
          return <SignUp />;
        case PageCode.CHANGE_INITIAL_PASSWORD:
          return <ChangeInitialPassword />;
        case PageCode.SIGN_IN:
          return <SignIn />;
        case PageCode.ADD_TIME_SLOTS:
          return <AddTimeSlots />;
        case PageCode.LIST_TIME_SLOTS:
          return <ListTimeSlots />;
        case PageCode.ADD_SCHEDULING:
          return <AddScheduling />;
        case PageCode.LIST_SCHEDULINGS:
          return <ListSchedulings />;
        case PageCode.SCHEDULING_DETAILS:
          return <SchedulingDetails />;
        case PageCode.CHANGE_SCHEDULING_DATA:
          return <ChangeSchedulingData />;
        case PageCode.ADD_NEWS:
          return <AddNews />;
        case PageCode.LIST_NEWS:
          return <ListNews />;
        case PageCode.HOME_PAGE:
          return <HomePage />;
        default:
          return <PageNotFound />;
      }
  }


const drawerWidth: number = 300;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent(this: any) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuList = [
    {icon: <CalendarMonthIcon />, name: 'Gestão de agendamentos', link:'/utilizadores/criar-utilizador'},
    {icon: <GroupIcon />, name: 'Gestão de utilizadores', link:'/utilizadores/login'},
    {icon: <LanguageIcon />, name: 'Gestão do portal', link:'/utilizadores/login'}
  ];

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} className={styles.header}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Bom dia, Josefina.
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <React.Fragment>
                {menuList.map((menu)=> <MenuItem icon={menu.icon} description={menu.name} link={menu.link} />)}
                <Divider sx={{ my: 1 }} />
                <MenuItem icon={<PermIdentityIcon />} description='Josefina Kosta' link={'/utilizadores/login'} />
            </React.Fragment>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <HomePage />
          </Container>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}