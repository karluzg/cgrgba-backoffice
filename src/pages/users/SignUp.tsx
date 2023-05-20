import { Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import 'dayjs/locale/pt';
import styles from './../../assets/css/signup.module.scss';

export default function SignUp() {

  let roles = ["Utilizador", "Colaborador", "Funcionário", "Gestor", "Administrador"];

  return (
    <>
    <Container>
      <React.Fragment>
        <Grid>

          <Typography variant="h4">
            Criar utilizador
          </Typography>
        </Grid>
          <Grid item xs={12} mt={'2px'} mb={10}>
                <Typography variant="h6" sx={{marginTop: 2}}>Adicionar novo utilizador de backoffice.</Typography>
            </Grid>
          <Grid container spacing={3} className={styles.signup_form}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="fullName"
                name="fullName"
                label="Nome completo"
                fullWidth
                autoComplete="nome-completo"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phoneNumber"
                name="phoneNumber"
                label="Nº telemóvel"
                fullWidth
                autoComplete="numero-telemovel"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="E-mail"
                fullWidth
                autoComplete="nome-completo"
                variant="standard"
                type='email'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth sx={{minWidth: 120}}>
                    <InputLabel id="role-label">Perfil</InputLabel>
                    <Select
                    labelId="role-label"
                    id="role"
                    label="Perfil"
                    >
                    {
                      roles.map((x, y) => (<MenuItem value={y}>{x}</MenuItem>))
                    }
                    </Select>
                </FormControl>
            </Grid>
          </Grid>
          <Grid>
            
          </Grid>
        </React.Fragment> 
    </Container>
    </>
  )
}
