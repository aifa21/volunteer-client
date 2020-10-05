import React,{useContext,useState} from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import logo from '../logos/Group 1329.png'
import { useParams,Link } from 'react-router-dom';
import {UserContext} from '../../App';
import Button from '@material-ui/core/Button';
const Register = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [addEvents, setAddEvents] = useState([]);
    const {name} = useParams();
    

    const handleRegister = (data) =>{
        const newRegister = {...loggedInUser};

        
        fetch('http://localhost:5000/addRegister', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegister)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
      }


    return (
   
        <div className="register-container" style={{ textAlign: 'center' }}>
           <img src={logo} height="65" alt=""/>
        <form onSubmit={handleRegister}>
            <h4>Register as volunteer</h4><br/>
        <input name="name" type="text" class="input" placeholder="Full Name:" value={loggedInUser.name} />
        
            <div className="line-box">
      <div className="line"></div>
           </div>
            <br /> 

            <input name="name" type="text" class="input" placeholder="Email:" value={loggedInUser.email} />
         
            <div className="line-box">
      <div className="line"></div>
           </div>
            <br /> 

            <input name="name" type="text" class="input" placeholder="Date" /><br />
            <div className="line-box">
      <div className="line"></div>
           </div>
            <br /> 

            <input name="name" type="text" class="input" placeholder="Description" /><br />
            <div className="line-box">
      <div className="line"></div>
           </div>
            <br />

            <input name="name" type="text" class="input" placeholder="Organize book at library"  /><br />
            <div className="line-box">
      <div className="line"></div>
           </div>
            <br /> <br />
           
        
            <Link to='/event'><Button  variant="contained" color="primary">Register</Button></Link> 
        </form>
        </div>
    );
};

export default Register;