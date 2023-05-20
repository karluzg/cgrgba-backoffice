import React from 'react';
import { Container, Grid, TextField, Typography } from '@mui/material';
import styles from './../../assets/css/signup.module.scss';
import logo from './../../assets/images/logo-portal-consular.jpg';


export default function ChangeInitialPassword() {
  return (
    <>
    <Container>
      <React.Fragment>
        <Grid 
          container
          spacing={0}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          
        >
          <Grid item xs={3} marginTop={'80px'}>
              <img src={logo} alt="" className={styles.center_image} />
          </Grid>
        </Grid>
        <Grid>
          <Typography variant="h5" mb={2} mt={10} textAlign={'left'}>
            Para a primeira utilização do portal, por favor altere a sua palavra-passe.
          </Typography>
        </Grid>

          <Grid container sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 3 } }} className={styles.signup_form}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{marginTop: 2}}>Adicionar novo utilizador de backoffice.</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="newPassword"
                name="newPassword"
                label="Nova palavra-passe"
                fullWidth
                autoComplete="nova-palavra-passe"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="confirmPassword"
                name="confirmPassword"
                label="Confirmação palara-passe"
                fullWidth
                autoComplete="numero-telemovel"
                variant="standard"
              />
            </Grid>
          </Grid>
        </React.Fragment> 
    </Container>
    </>
  )
}
