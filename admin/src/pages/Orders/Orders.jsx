import {useEffect, useState} from 'react'
import './Orders.css'
import axios from "axios";
import toast from "react-hot-toast";
const Orders = () => {
  const url = "http://localhost:8080/auth";
  const [orderList,setOrderList] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${url}/getAllOrders`);
      setOrderList(response.data.orders || []);
    } catch (error){
      console.log(error);
    }
  };


  const handleStatusChange = async (orderId, newStatus) =>
  {
    try {
      const statusValue = parseInt(newStatus, 10);
      const response = await axios.put(`${url}/changeOrderStatus/${orderId}?status=${statusValue}`);
      if (response.status === 200){
        console.log("Status Change Successful");
        toast.success("Order Changed Status Success");
      }
        fetchOrders();

    }catch (error){
      console.log("Error: ",error);
    }

  }

  useEffect(() => {
    fetchOrders();
  }, []);


  return (
        <div className="order add flex-col">  
          <h3>Orders Page</h3>
            <div className="order-table">
              {orderList.length === 0 ? (
                  <p>No Current Orders</p>
              ) : (
                  <>
                    <div className="order-table-format title">
                      <b>Order ID</b>
                      <b>Username</b>
                      <b>Order Date</b>
                      <b>Total Amount</b>
                      <b>Status</b>
                    </div>
                    {orderList.map((item, index) => (
                        <div key={index} className="order-table-format">
                          <p>{item?.orderId || 'N/A'}</p>
                          <p>{item?.ourUsers?.username || 'N/A'}</p>
                          <p>{item?.orderDate || 'N/A'}</p>
                          <p>{item?.totalAmount || 'N/A'}</p>
                          <div className="order-select-container">
                          <select name="status" value={item.status} onChange={(e) => handleStatusChange(item.orderId, e.target.value)} className="order-select">
                              <option value={0}>Being Prepared</option>
                              <option value={1}>To Be Shipped</option>
                              <option value={2}>Waiting For Pickup</option>
                              <option value={3}>Order Complete</option>
                          </select>
                          </div>
                        </div>
                    ))}
                  </>
              )}
            </div>
        </div>
  )
}

export default Orders