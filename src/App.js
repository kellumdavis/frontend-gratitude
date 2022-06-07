import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles'
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
    const URL = "https://grattitudebackend.herokuapp.com/";
    const classes = useStyles();
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Gratitudes</Typography>
                {/* <img className={classes.image} src={memories} alt="memories" height="60" /> */}
        {/* <Header />
         <Routes>
           <Route exact path="/" element={<Home/>}/>
         </Routes>
         <Footer /> */}
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
     );
  }
  
  export default App;