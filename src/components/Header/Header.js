import React from 'react';
import './Header.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logos/Group 1329.png';
import { useParams,Link } from 'react-router-dom';
import {   Navbar } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

const Header = () => {
    const classes = useStyles();
    return (
        <div className="NavbarSection">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent">
            <Navbar.Brand  className="mr-2" href="/home"><img className="brand" src={logo} width="120" height="50" alt="" /></Navbar.Brand>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/donation">Donation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/event">Event</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                               
                            </li>
                            <div className={classes.root}>
                            
                            <Link to='/register'>  <Button variant="contained" color="primary">Register</Button></Link>
                           
                            <Link to='/addEvent'>     <Button variant="contained" >Admin</Button></Link>
                            
                            </div>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;