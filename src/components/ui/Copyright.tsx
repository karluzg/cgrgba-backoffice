import { CssBaseline, Grid, Typography } from "@mui/material";

export default function Copyright(props: any) {
    return (
        <Grid container spacing={2} columns={16}>
          <CssBaseline />
          <Grid item xs={8}>
          <Typography variant="body2" color="text.secondary" align="left" {...props}>
              {' © '} {new Date().getFullYear()} {' '}
                Consulado Geral da República da Guiné-Bissau em Albufeira. Todos os Direitos Reservados.
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" align="right">
              Powered by Nantoi Digital
            </Typography>
          </Grid>
        </Grid>
    );
  }