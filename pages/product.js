import React from 'react';
  
const Product = () => {
  return (
    <div className='product'>
      <h3>Enter the name of the product</h3>
      <input type  = "text" />
      <h3>Desciption of the product</h3>
      <input type  = "text" />
      <h3>Count of the product</h3>
      <input type  = "number" />
    </div>
  );
};
  
export default Product;