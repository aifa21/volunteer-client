import React,{useContext,useEffect,useState} from 'react';
import { UserContext } from '../../App';
import './Event.css';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
const Event = () => {
     const [volunteers,setVolunteers]=useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/volunteers?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setVolunteers(data));
    }, [])
    return (
        <div className="container">
            <Header></Header>
         <div className="headerEvent">
                            
           
            {
                volunteers.map(register=><li>{register.name}{register.email}
                                        <Button>Cancel</Button> </li>)
               
            }
        </div>
                            
             </div>
                    
    );
};

export default Event;