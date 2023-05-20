import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/common/Dashboard';
import SignUp from './pages/users/SignUp';
import SignIn from './pages/users/SignIn';
import PageNotFound from './pages/common/PageNotFound';
import SchedulingDetails from "./pages/scheduling/SchedulingDetails";
import ChangeInitialPassword from "./pages/users/ChangeInitialPassword";
import './assets/css/global.module.scss';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/utilizadores/login" element={<SignIn />} />
            <Route path="/utilizadores/criar-utilizador" element={<SignUp />} />
            <Route path="/utilizadores/alterar-palavra-passe-inicial" element={<ChangeInitialPassword />} />

            <Route path="/agendamentos/listar-agendamentos" element={<SchedulingDetails />} />
            <Route path="/agendamentos/detalhes-agendamento" element={<SignUp />} />
            <Route path="/agendamentos/alterar-agendamento" element={<SignUp />} />


            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
