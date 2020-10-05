import { Card } from '@material-ui/core';
import React from 'react';
import './Service.css';
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, img,} = props.service;
    return (
       
               
       <div className="serviceContent">
         <div className="col-md-3">
           <div className="imgContent">
              <img src={img}/>
            </div>

            <div className="btn-info">
            <Link to='/register' > <Button className="main-button"> {name}</Button></Link>
           
            </div>
            </div></div>
        
    );
};

export default Service;