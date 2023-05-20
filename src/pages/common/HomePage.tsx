import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import styles from './../../assets/css/dashboard.module.scss';
import mapa from './../../assets/images/mapa-guine-bissau.png';

import totalAgendamentos_img from './../../assets/images/agendamentos-dia.png';
import totalAtendidos_img from './../../assets/images/atendidos.png';
import totalPorAtender_img from './../../assets/images/por-atender.png';
import totalCancelados_img from './../../assets/images/cancelados.png';

import Progress from '../../components/ui/Progress';


import { ListItemText } from '@mui/material';
import React from 'react';

export default function HomePage() {
  
  const [nAtendidos, setNAtendidos] = React.useState(28);
    const [nCancelados, setNCancelados] = React.useState(2);
    const [nPorAtender, setNPorAtender] = React.useState(5);
    const [nTotalAgendamentos, setTotalAgendamentos] = React.useState(35);

    const MAX = nTotalAgendamentos;
    const MIN = 0;

    const getPercentage = (value: number) => (((value - MIN) * 100) / (MAX - MIN)).toFixed(1).replace(/\.0$/, '');

    const nAtendidos_perc= getPercentage(nAtendidos);
    const nCancelados_perc= getPercentage(nCancelados);
    const nPorAtender_perc= getPercentage(nPorAtender);
    const nTotalAgendamentos_perc= getPercentage(nTotalAgendamentos);
    
  return (
    <React.Fragment>
      <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' , height: 240}}>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={12}>
                                <img src={totalAgendamentos_img} alt="" />
                            </Grid>
                            <Grid item xs={4} textAlign={'right'}>
                                <ListItemText primary={nTotalAgendamentos} secondary={"Total"} />
                            </Grid>
                            <Grid item xs={12} mt={2}>
                                <h3>Agendamentos do dia</h3>
                            </Grid>
                            <Grid item xs={4} textAlign={'right'} mt={2}>
                                <h3>{nTotalAgendamentos_perc}{'%'}</h3>
                            </Grid>
                        </Grid>
                        <Progress value={nTotalAgendamentos_perc} color="info" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                        <Grid container spacing={2} columns={16}>
                        <Grid item xs={12}>
                                <img src={totalAtendidos_img} alt="" />
                            </Grid>
                            <Grid item xs={4} textAlign={'right'}>
                                <ListItemText primary={nAtendidos} secondary={"Total"} />
                            </Grid>
                            <Grid item xs={12} mt={2}>
                                <h3>Atendidos</h3>
                            </Grid>
                            <Grid item xs={4} textAlign={'right'} mt={2}>
                                <h3>{nAtendidos_perc} {'%'}</h3>
                            </Grid>
                        </Grid>
                        <Progress value={nAtendidos_perc} color="success" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={12}>
                                <img src={totalPorAtender_img} alt="" />
                            </Grid>
                            <Grid item xs={4} textAlign={'right'}>
                                <ListItemText primary={nPorAtender} secondary={"Total"} />
                            </Grid>
                            <Grid item xs={12} mt={2}>
                                <h3>Por atender</h3>
                            </Grid>
                            <Grid item xs={4} textAlign={'right'} mt={2}>
                                <h3>{nPorAtender_perc} {'%'}</h3>
                            </Grid>
                        </Grid>
                        <Progress value={nPorAtender_perc} color="warning" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={12}>
                                <img src={totalCancelados_img} alt="" />
                            </Grid>
                            <Grid item xs={4} textAlign={'right'}>
                                <ListItemText primary={nCancelados} secondary={"Total"} />
                            </Grid>
                            <Grid item xs={12} mt={2}>
                                <h3>Cancelados</h3>
                            </Grid>
                            <Grid item xs={4} textAlign={'right'} mt={2}>
                                <h3>{nCancelados_perc} {'%'}</h3>
                            </Grid>
                        </Grid>
                        <Progress value={nCancelados_perc} color="error" />
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={"auto"} md={4} marginTop={'40px'}>
                <img src={mapa} alt="mapa-guiné-bissau" className={styles.center_image} />
            </Grid>
    </React.Fragment>
  )
}
