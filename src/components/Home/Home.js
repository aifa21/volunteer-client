import React,{useState, useEffect } from 'react';
import './Home.css'
import headerImg from '../../components/images/babySit.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

import Service from '../Service/Service';
import Card from '@material-ui/core/Card';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
const Home = () => {
    const [addEvents, setAddEvents] = useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:5000/addEvents')
        .then(res => res.json())
        .then(data => setAddEvents(data))
    }, [])


    
    return (
     <div className="Section">
        <div className="HeaderSection d-flex align-items-center">
            <Header></Header>
            <div className="container-fluid">
                <div className="row align-items-center ">
                    
                    <div className="HeaderSearch">
                            <h2>I grow by helping people in need.</h2>
                            
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className="mr-4" variant="outline-success">Search</Button>
                        
                          
                        </div>
                    </div>
        
                    <div className="EventContainer">
                        <div className="container">
                          <div className="row justify-content-around">
                        {
                            addEvents.map(sv=><Service  service={sv}></Service> )
                        }
                    </div>
                        </div>
                           </div>
                            </div>
                               </div>
                                     </div>
    );
};

export default Home;