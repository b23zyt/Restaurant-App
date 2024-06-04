import React from 'react'
import "./orderPage.css"

const OrderPage = () => {
  return (
    <div className='order-container'>
      <table className='order-table'>
      <thead>
        <tr className='order-heading'>
          <th className='order-heading-hide'>Order Id</th>
          <th>Date</th>
          <th>Price</th>
          <th  className='order-heading-hide'>Products</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className='order-heading-hide'>123338559494</td>
          <td>21/05/2024</td>
          <td>$ 29.9</td>
          <td  className='order-heading-hide'>ig Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
          <td>On the way (approx. 10min)...</td>
        </tr>
        <tr>
          <td className='order-heading-hide'>123338559494</td>
          <td>21/05/2024</td>
          <td>$ 29.9</td>
          <td  className='order-heading-hide'>ig Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
          <td>On the way (approx. 10min)...</td>
        </tr>

        <tr>
          <td className='order-heading-hide'>123338559494</td>
          <td>21/05/2024</td>
          <td>$ 29.9</td>
          <td  className='order-heading-hide'>ig Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
          <td>On the way (approx. 10min)...</td>
        </tr>


        
      </tbody>
      </table>
    </div>
  )
}

export default OrderPage;
