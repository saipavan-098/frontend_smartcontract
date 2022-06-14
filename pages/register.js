import React from 'react';
//import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//toast.configure()
const Register = () => {
  //toast.configure()
  const notify = () => {
     alert('The hash value is 1x345432ewd233432')
   }
  return (
      <div className='reg'>
      <h3>Enter stakeholder name:</h3>
      <input type  = "text" />
      <h3>Enter products related to stakeholder :</h3>
      <input type ="text" />
      <button onClick={notify}>Submit</button>  
    </div>
  );
};
  
export default Register;