import React from 'react';
  
const Status = () => {
  const checkstat = () => {
    alert('The status of the product')
  }
  return (
   <div className='status'>
    <h3>Enter the product to check the status</h3>
    <input type  = "text" />
    <button onClick={checkstat}>Check status</button> 
   </div>
  );
};
  
export default Status;