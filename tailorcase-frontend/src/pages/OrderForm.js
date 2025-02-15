// // import React, { useState } from "react";
// // import axios from "axios";

// // const OrderForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     measurements: "",
// //     pattern: null
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     setFormData({ ...formData, pattern: e.target.files[0] });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formDataToSend = new FormData();
// //     formDataToSend.append("name", formData.name);
// //     formDataToSend.append("measurements", formData.measurements);
// //     formDataToSend.append("pattern", formData.pattern);

// //     try {
// //       await axios.post("http://localhost:3000/api/orders", formDataToSend);
// //       alert("Order placed successfully!");
// //     } catch (error) {
// //       alert("Failed to place order.");
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2>Place a Custom Tailoring Order</h2>
// //       <form onSubmit={handleSubmit} encType="multipart/form-data">
// //         <div className="mb-3">
// //           <label className="form-label">Name</label>
// //           <input type="text" name="name" className="form-control" onChange={handleChange} required />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Measurements</label>
// //           <textarea name="measurements" className="form-control" onChange={handleChange} required></textarea>
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Upload Dress Pattern</label>
// //           <input type="file" name="pattern" className="form-control" onChange={handleFileChange} required />
// //         </div>
// //         <button type="submit" className="btn btn-primary">Submit Order</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default OrderForm;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// const OrderForm = () => {
//   const [orderDetails, setOrderDetails] = useState({
//     name: "",
//     contact: "",
//     address: "",
//     clothingType: "Shirt",
//     fabricType: "Customer Provided",
//     measurements: "",
//     customization: "",
//     specialInstructions: "",
//     deliveryDate: "",
//     paymentMethod: "QR Code Payment",
//   });

//   const handleChange = (e) => {
//     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Order Placed Successfully!");
//   };

//   return (
//     <Container className="mt-4">
//       <h2 className="text-center mb-4">Place Your Order</h2>
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Card className="p-4 shadow-sm">
//             <Form onSubmit={handleSubmit}>
              
//               {/* Customer Details */}
//               <h4>Customer Information</h4>
//               <Form.Group className="mb-3">
//                 <Form.Label>Full Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   value={orderDetails.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Contact Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   name="contact"
//                   value={orderDetails.contact}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={2}
//                   name="address"
//                   value={orderDetails.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               {/* Order Details */}
//               <h4>Order Details</h4>
//               <Form.Group className="mb-3">
//                 <Form.Label>Clothing Type</Form.Label>
//                 <Form.Select name="clothingType" value={orderDetails.clothingType} onChange={handleChange}>
//                   <option>Shirt</option>
//                   <option>Pants</option>
//                   <option>Suit</option>
//                   <option>Dress</option>
//                   <option>Traditional Wear</option>
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Fabric Type</Form.Label>
//                 <Form.Select name="fabricType" value={orderDetails.fabricType} onChange={handleChange}>
//                   <option>Customer Provided</option>
//                   <option>Tailor Provided</option>
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Measurements</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={2}
//                   name="measurements"
//                   placeholder="Enter measurements or select saved profile"
//                   value={orderDetails.measurements}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Customization Options</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={2}
//                   name="customization"
//                   placeholder="E.g. Collar Type, Sleeve Length, Fit Preference"
//                   value={orderDetails.customization}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Special Instructions</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={2}
//                   name="specialInstructions"
//                   placeholder="Any additional requests or instructions"
//                   value={orderDetails.specialInstructions}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               {/* Delivery & Payment */}
//               <h4>Delivery & Payment</h4>
//               <Form.Group className="mb-3">
//                 <Form.Label>Estimated Delivery Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   name="deliveryDate"
//                   value={orderDetails.deliveryDate}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Payment Method</Form.Label>
//                 <Form.Select name="paymentMethod" value={orderDetails.paymentMethod} onChange={handleChange}>
//                   <option>QR Code Payment</option>
//                   <option>Cash on Delivery</option>
//                 </Form.Select>
//               </Form.Group>

//               {/* Order Summary */}
//               <h4>Order Summary</h4>
//               <Card className="p-3 mb-3">
//                 <p><strong>Name:</strong> {orderDetails.name || "N/A"}</p>
//                 <p><strong>Clothing Type:</strong> {orderDetails.clothingType}</p>
//                 <p><strong>Fabric:</strong> {orderDetails.fabricType}</p>
//                 <p><strong>Measurements:</strong> {orderDetails.measurements || "Not Provided"}</p>
//                 <p><strong>Customization:</strong> {orderDetails.customization || "None"}</p>
//                 <p><strong>Special Instructions:</strong> {orderDetails.specialInstructions || "None"}</p>
//                 <p><strong>Delivery Date:</strong> {orderDetails.deliveryDate || "Not Selected"}</p>
//                 <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
//               </Card>

//               {/* Submit Button */}
//               <Button variant="success" type="submit" className="w-100">
//                 Confirm Order
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OrderForm;



import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const OrderForm = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    contact: "",
    address: "",
    clothingType: "Shirt",
    fabricType: "Customer Provided",
    measurements: "",
    customization: "",
    specialInstructions: "",
    deliveryDate: "",
    paymentMethod: "QR Code Payment",
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Place Your Order</h2><br></br>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm static-card">  {/* Added className "static-card" */}
            <Form onSubmit={handleSubmit}>
              
              {/* Customer Details */}
              <h4>Customer Information</h4>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="contact"
                  value={orderDetails.contact}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="address"
                  value={orderDetails.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Order Details */}
              <h4>Order Details</h4>
              <Form.Group className="mb-3">
                <Form.Label>Clothing Type</Form.Label>
                <Form.Select name="clothingType" value={orderDetails.clothingType} onChange={handleChange}>
                  <option>Shirt</option>
                  <option>Pants</option>
                  <option>Suit</option>
                  <option>Dress</option>
                  <option>Traditional Wear</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fabric Type</Form.Label>
                <Form.Select name="fabricType" value={orderDetails.fabricType} onChange={handleChange}>
                  <option>Customer Provided</option>
                  <option>Tailor Provided</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Measurements</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="measurements"
                  placeholder="Enter measurements or select saved profile"
                  value={orderDetails.measurements}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Customization Options</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="customization"
                  placeholder="E.g. Collar Type, Sleeve Length, Fit Preference"
                  value={orderDetails.customization}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Special Instructions</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="specialInstructions"
                  placeholder="Any additional requests or instructions"
                  value={orderDetails.specialInstructions}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Delivery & Payment */}
              <h4>Delivery & Payment</h4>
              <Form.Group className="mb-3">
                <Form.Label>Estimated Delivery Date</Form.Label>
                <Form.Control
                  type="date"
                  name="deliveryDate"
                  value={orderDetails.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select name="paymentMethod" value={orderDetails.paymentMethod} onChange={handleChange}>
                  <option>QR Code Payment</option>
                  <option>Cash on Delivery</option>
                </Form.Select>
              </Form.Group>

              {/* Order Summary */}
              <h4>Order Summary</h4>
              <Card className="p-3 mb-3">
                <p><strong>Name:</strong> {orderDetails.name || "N/A"}</p>
                <p><strong>Clothing Type:</strong> {orderDetails.clothingType}</p>
                <p><strong>Fabric:</strong> {orderDetails.fabricType}</p>
                <p><strong>Measurements:</strong> {orderDetails.measurements || "Not Provided"}</p>
                <p><strong>Customization:</strong> {orderDetails.customization || "None"}</p>
                <p><strong>Special Instructions:</strong> {orderDetails.specialInstructions || "None"}</p>
                <p><strong>Delivery Date:</strong> {orderDetails.deliveryDate || "Not Selected"}</p>
                <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
              </Card>

              {/* Submit Button */}
              <Button variant="success" type="submit" className="w-100">
                Confirm Order
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderForm;
