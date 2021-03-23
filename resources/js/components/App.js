import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Testimonials from './Testimonials';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';
import ChildCustody from './ChildCustody';
import ChildSupport from './ChildSupport';
import CriminalLaw from './CriminalLaw';
import CriminalTheftLaw from './CriminalTheftLaw';
import DuiLaw from './DuiLaw';
import DivorceLaw from './DivorceLaw';
import DrugCrimesLaw from './DrugCrimesLaw';
import FamilyLaw from './FamilyLaw';
import ViolentCrimesLaw from './ViolentCrimesLaw';
import ConstructionDefects from './ConstructionDefects';
import Scroll from './Scroll';



function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#a68f65',
                contrastText: '#000000',
            },
            secondary: {
                main: '#a68f65',
            },
        },
        typography: {
            fontFamily: [
                'Libre Baskerville',
                //'Montserrat',
                //'-apple-system',
                //'BlinkMacSystemFont',
                //'"Segoe UI"',
                //'Roboto',
                //'"Helvetica Neue"',
                //'Arial',
                //'sans-serif',
                //'"Apple Color Emoji"',
                //'"Segoe UI Emoji"',
                //'"Segoe UI Symbol"',
            ].join(','),
        },


    });

    return (
        <BrowserRouter>
            <Scroll showBelow={250} />
            <ThemeProvider theme={theme}>
                <Header />
                <Paper style={{ padding: '5px', overflow: 'hidden', marginTop: '6em' }} square>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/testimonials" component={Testimonials} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/childCustody" component={ChildCustody} ></Route>
                        <Route exact path="/childSupport" component={ChildSupport} ></Route>
                        <Route exact path="/criminalLaw" component={CriminalLaw} ></Route>
                        <Route exact path="/criminalTheftLaw" component={CriminalTheftLaw} ></Route>
                        <Route exact path="/duiLaw" component={DuiLaw} ></Route>
                        <Route exact path="/divorceLaw" component={DivorceLaw} ></Route>
                        <Route exact path="/drugCrimesLaw" component={DrugCrimesLaw} ></Route>
                        <Route exact path="/familyLaw" component={FamilyLaw} ></Route>
                        <Route exact path="/violentCrimesLaw" component={ViolentCrimesLaw} ></Route>
                        <Route exact path="/constructionDefects" component={ConstructionDefects} ></Route>
                    </Switch>
                </Paper>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );

}

ReactDOM.render(<App />, document.getElementById('app'));
