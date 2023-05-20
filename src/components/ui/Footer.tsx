import Box from '@mui/material/Box';
import Copyright from './../ui/Copyright';
import styles from './../../assets/css/footer.module.scss';


export default function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
        <Copyright />
    </Box>
  );
}