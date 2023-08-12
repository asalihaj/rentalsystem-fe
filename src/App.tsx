

import { Container } from "@mui/material";

import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { observer } from "mobx-react-lite";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
    const location = useLocation();

    return (
        <>
            <ToastContainer position='bottom-right' />
            {location.pathname === "/" ? <HomePage /> : (
                <>
                    <NavBar />
                    <Container>
                        <Outlet />
                    </Container>
                </>
            )}
        </>
    );
}

export default observer(App);
