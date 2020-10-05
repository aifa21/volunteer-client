import React from 'react';

const AddEvent = () => {
    const handleAddEvent = () => {
       const event = {};
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
    }
    return (
        <div>
        
            <form action="">
            
               <p><span>NAME:</span><input type="text"/></p>
               <p><span>PRICE:</span><input type="text"/></p>
               <p><span>QUANTITY:</span><input type="text"/></p>
               <p><span>Product Image:</span><input type="file"/></p>
           
                <button onClick={handleAddEvent}>Add Event</button>
            </form>
            
          
        </div>
    );
};

export default AddEvent;