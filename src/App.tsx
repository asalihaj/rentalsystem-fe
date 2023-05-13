

import { Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { observer } from "mobx-react-lite";

function App() {
  // const location = useLocation();
  return (

   <Router>
   <>


   <ToastContainer position='bottom-right' hideProgressBar />
  
   <Route exact path='/' component={HomePage} />
   <Route 
   path={'/(.+)'}
   render={()=> (
    <>

      <Switch>
        <Route  path= '/login' component={Login} />
        <Route path= '/register' component={Register} />
      </Switch>
   
   </>
   )}
   />
   </>
   </Router>
  );
}

export default observer (App);
