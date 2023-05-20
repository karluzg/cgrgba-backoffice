import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../../components/ui/Footer';

import styles from './../../assets/css/signup.module.scss';
import logo from '../../assets/images/logo-login.png';
import login_form_background from '../../assets/images/login-form-backgroud.png';
import { useState } from 'react';


const theme = createTheme();

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const isValidFormData = () => {
    return email && email.trim() != '' && password && password.trim() != '';
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', paddingBottom:'80px' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FFF',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid 
          container
          spacing={0}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          xs={6}
          >
          <Grid item xs={3} marginTop={'80px'}>
            <img src={logo} alt="" className={styles.center_image} />
          </Grid>
        </Grid>
        <Grid item xs={6} sm={8} md={4} component={Paper} elevation={6} square
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundImage: {login_form_background}
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#506E58' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=> {setEmail(e.target.value)}}
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> {setPassword(e.target.value)}}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: `${isValidFormData() ? '#506E58' : '#A1B0A5'}`}}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs mt={6}>
                  <Link href="#" variant="body2" sx={{ textDecoration: 'none', color: '#000'}}>
                    Esqueceu palavra-passe ?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}