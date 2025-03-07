import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PriceList.css';
import googlepay from "../assets/googlepay.png";
import Paypal from "../assets/PAYPAL.png";
import CashOnDelivery from "../assets/cash-on-delivery.png";
import CreditDebit from "../assets/CREDITDEBIT.png";
import UPI from "../assets/UPI.png";

const PriceList = () => {
  const [isMen, setIsMen] = useState(true);

  const menPricing = [
    { garment: 'Shirt', premium: 1850, luxury: 2500 },
    { garment: 'Trouser', premium: 2000, luxury: 3500 },
    { garment: 'Blazer', premium: 10000, luxury: 20000 },
    { garment: 'Two Piece Suit', premium: 12000, luxury: 25000 },
    { garment: 'Three Piece Suit', premium: 16500, luxury: 32500 },
    { garment: 'Double Breasted Jacket', premium: 15000, luxury: 28000 },
    { garment: 'Double Breasted Suit', premium: 17000, luxury: 27000 },
    { garment: 'Waist Coat', premium: 4500, luxury: null },
    { garment: 'Tuxedo Suit', premium: 14500, luxury: 27000 },
    { garment: 'Long Coat', premium: 14000, luxury: 25000 },
    { garment: 'Kurta', premium: 2000, luxury: 3500 },
    { garment: 'Kurta Pajama', premium: 3000, luxury: 4500 },
    { garment: 'Pathani Kurta', premium: 3000, luxury: 4500 },
    { garment: 'Pathani Set', premium: 4100, luxury: 6000 },
    { garment: 'Jodhpuri/Bandgala', premium: 16000, luxury: 26000 },
    { garment: 'Nehru Jacket', premium: 5000, luxury: null },
    { garment: 'Indo Western', premium: 16000, luxury: null },
    { garment: 'Sherwani', premium: 18000, luxury: 28000 },
    { garment: 'Safari Suit', premium: 5000, luxury: 12500 },
    { garment: 'Full Canvas Suit', premium: 25000, luxury: null },
    { garment: 'Half Canvas Suit', premium: 20000, luxury: null },
    { garment: 'Chinos Trouser', premium: 2800, luxury: null },
    { garment: 'Tuxedo Shirt', premium: 3200, luxury: null },
    { garment: 'Chikankari Kurta', premium: 2000, luxury: null },
    { garment: 'Tuxedo Jacket', premium: 12500, luxury: null },
  ];

  const womenPricing = [
    { garment: 'Dress', premium: 3000, luxury: 5000 },
    { garment: 'Skirt', premium: 1500, luxury: 3000 },
    { garment: 'Blouse', premium: 2000, luxury: 3500 },
    { garment: 'Evening Gown', premium: 12000, luxury: 20000 },
    { garment: 'Sari', premium: 5000, luxury: 10000 },
    { garment: 'Lehenga', premium: 15000, luxury: 30000 },
    { garment: 'Salwar Kameez', premium: 3000, luxury: 5000 },
    { garment: 'Anarkali', premium: 8000, luxury: 15000 },
    { garment: 'Sharara', premium: 7000, luxury: 14000 },
    { garment: 'Churidar', premium: 2000, luxury: 4000 },
    { garment: 'Gharara', premium: 10000, luxury: 20000 },
    { garment: 'Choli', premium: 2500, luxury: 5000 },
    { garment: 'Kurti', premium: 2000, luxury: 3500 },
    { garment: 'Palazzo', premium: 2500, luxury: 5000 },
    { garment: 'Dupatta', premium: 1000, luxury: 2000 },
    { garment: 'Abaya', premium: 4000, luxury: 8000 },
    { garment: 'Hijab', premium: 500, luxury: 1000 },
    { garment: 'Kaftan', premium: 3000, luxury: 6000 },
    { garment: 'Peplum Top', premium: 2500, luxury: 5000 },
    { garment: 'Jacket', premium: 4000, luxury: 8000 },
  ];

  const pricing = isMen ? menPricing : womenPricing;

  return (
    <div className="container mt-5">
      <h1>Our Service Pricing</h1>
      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={`btn ${isMen ? 'btn-primary' : 'btn-secondary'}`} 
            onClick={() => setIsMen(true)}
          >
            Men
          </button>
          <button 
            type="button" 
            className={`btn ${!isMen ? 'btn-primary' : 'btn-secondary'}`} 
            onClick={() => setIsMen(false)}
          >
            Women
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="table table-dark table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Garment</th>
              <th scope="col">Premium</th>
              <th scope="col">Luxury</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((item, index) => (
              <tr key={index}>
                <td>{item.garment}</td>
                <td>{item.premium !== null ? `₹${item.premium}` : '---'}</td>
                <td>{item.luxury !== null ? `₹${item.luxury}` : '---'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="payment-methods mt-5">
        <h3>Accepted Payment Methods</h3>
        <div className="payment-options">
          <div className="payment-option">
            <img src={UPI} alt="UPI Payment" className="payment-icon" />
            <p>UPI </p>
            <p>(Unified Payments Interface)</p>
          </div>
          <div className="payment-option">
            <img src={CreditDebit} alt="Credit/Debit Card" className="payment-icon" />
            <p>Credit/Debit Cards </p>
            <p>(Visa, MasterCard, AMEX)</p>
          </div>
          <div className="payment-option">
            <img src={CashOnDelivery} alt="Cash on Delivery" className="payment-icon" />
            <p>Cash on Delivery </p>
            <p>(COD)</p>
          </div>
          <div className="payment-option">
            <img src={Paypal} alt="PayPal" className="payment-icon" />
            <p>PayPal</p>
            <p>(Pay with PayPal)</p>
          </div>
          <div className="payment-option">
            <img src={googlepay} alt="Digital Wallets" className="payment-icon" />
            <p>Digital Wallets </p>
            <p>(Google Pay, PhonePe, etc.)</p>
          </div>
        </div>
        <p className="payment-note">*All transactions are secure and encrypted.</p>
      </div>
    </div>
  );
};

export default PriceList;
