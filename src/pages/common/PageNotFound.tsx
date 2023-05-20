import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export default function PageNotFound() {
  const navigate = useNavigate();


  return (
    <>
     <div>PageNotFound</div>
      <div>
        <Button variant="contained" onClick={()=> navigate("/")}>Ir à página inicial</Button>
      </div>
    </>
   
  )
}
