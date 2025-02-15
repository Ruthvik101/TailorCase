

// // // // // import React, { useState } from 'react';
// // // // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // // // import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

// // // // // const AppointmentBooking = () => {
// // // // //   const [checkCode, setCheckCode] = useState('');
// // // // //   const [servicesAvailable, setServicesAvailable] = useState(false);

// // // // //   const handleCheckCodeChange = (e) => {
// // // // //     setCheckCode(e.target.value);
// // // // //   };

// // // // //   const handleCheckAvailability = () => {
// // // // //     setServicesAvailable(checkCode !== '574253');
// // // // //   };

// // // // //   return (
// // // // //     <Container className="mt-5">
// // // // //       <Row>
// // // // //         {/* Column 1: Book an Appointment */}
// // // // //         <Col md={4} className="text-center">
// // // // //           <h3>How to book an appointment    </h3>
          
          
// // // // //         </Col>

// // // // //         {/* Column 2: How to book an appointment */}
// // // // //         <Col md={4}>
          
// // // // //           <ol>
// // // // //             <li>Click on the desired date for which you would like to book the appointment.</li>
// // // // //             <li>Select the available slot based on what time suits you the most.</li>
// // // // //             <li>Fill all the details asked in the booking form. Don’t forget to enter your contact number.</li>
// // // // //             <li>Submit and wait until you receive a confirmation of your appointment on the screen.</li>
// // // // //           </ol>
// // // // //         </Col>

// // // // //         {/* Column 3: Select Your Appointment Date */}
// // // // //         <Col md={4} className="text-center">
// // // // //           <h3>Choose a Date</h3>
// // // // //           <div className="calendar">
// // // // //             <div className="month">
// // // // //               <ul className="list-unstyled d-flex justify-content-between">
// // // // //                 <li className="prev">&#10094;</li>
// // // // //                 <li>February 2025</li>
// // // // //                 <li className="next">&#10095;</li>
// // // // //               </ul>
// // // // //             </div>
// // // // //             <ul className="weekdays list-unstyled d-flex justify-content-between">
// // // // //               <li>Mon</li>
// // // // //               <li>Tue</li>
// // // // //               <li>Wed</li>
// // // // //               <li>Thu</li>
// // // // //               <li>Fri</li>
// // // // //               <li>Sat</li>
// // // // //               <li>Sun</li>
// // // // //             </ul>
// // // // //             <ul className="days list-unstyled d-flex flex-wrap">
// // // // //               {Array.from({ length: 28 }, (_, i) => (
// // // // //                 <li key={i} className="p-2">{i + 1}</li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           </div>
// // // // //         </Col>
// // // // //       </Row>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default AppointmentBooking;


// // // // import React, { useState } from "react";
// // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // import { Container, Row, Col, Button } from "react-bootstrap";

// // // // const AppointmentBooking = () => {
// // // //   const today = new Date();
// // // //   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
// // // //   const [currentYear, setCurrentYear] = useState(today.getFullYear());
// // // //   const [selectedDate, setSelectedDate] = useState(null);

// // // //   // Function to get days in a month
// // // //   const getDaysInMonth = (month, year) => {
// // // //     return new Date(year, month + 1, 0).getDate();
// // // //   };

// // // //   // Function to navigate to the next month
// // // //   const nextMonth = () => {
// // // //     setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
// // // //     setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
// // // //     setSelectedDate(null);
// // // //   };

// // // //   // Handle date selection
// // // //   const handleDateClick = (day) => {
// // // //     setSelectedDate(day);
// // // //   };

// // // //   // Generate days for the current month
// // // //   const days = [];
// // // //   const totalDays = getDaysInMonth(currentMonth, currentYear);
// // // //   for (let i = 1; i <= totalDays; i++) {
// // // //     days.push(i);
// // // //   }

// // // //   return (
// // // //     <Container className="mt-5">
// // // //       <Row>
// // // //         {/* Column 1: How to book an appointment */}
// // // //         <Col md={4}>
// // // //           <h3>How to book an appointment</h3>
// // // //           <ol>
// // // //             <li>Click on the desired date for which you would like to book the appointment.</li>
// // // //             <li>Select the available slot based on what time suits you the most.</li>
// // // //             <li>Fill all the details asked in the booking form. Don’t forget to enter your contact number.</li>
// // // //             <li>Submit and wait until you receive a confirmation of your appointment on the screen.</li>
// // // //           </ol>
// // // //         </Col>

// // // //         {/* Column 2: Select Your Appointment Date */}
// // // //         <Col md={8} className="text-center">
// // // //           <h3>Choose a Date</h3>
// // // //           <div className="calendar border p-3 rounded">
// // // //             <div className="d-flex justify-content-between align-items-center mb-2">
// // // //               <h5>
// // // //                 {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
// // // //               </h5>
// // // //               <Button variant="danger" size="sm" onClick={nextMonth}>
// // // //                 ➡️
// // // //               </Button>
// // // //             </div>
// // // //             <div className="d-flex justify-content-between font-weight-bold">
// // // //               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
// // // //                 <div key={day} className="w-100 text-center">
// // // //                   {day}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //             <div className="d-flex flex-wrap">
// // // //               {days.map((day) => (
// // // //                 <div
// // // //                   key={day}
// // // //                   className={`p-2 text-center w-100 border m-1 rounded ${
// // // //                     new Date(currentYear, currentMonth, day) < today ? "text-muted" : "bg-light cursor-pointer"
// // // //                   } ${selectedDate === day ? "bg-primary text-white" : ""}`}
// // // //                   onClick={() =>
// // // //                     new Date(currentYear, currentMonth, day) >= today && handleDateClick(day)
// // // //                   }
// // // //                 >
// // // //                   {day}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Appointment Slots */}
// // // //           {selectedDate && (
// // // //             <div className="mt-4 p-3 bg-light border rounded">
// // // //               <h4>
// // // //                 Available Appointments on {new Date(currentYear, currentMonth, selectedDate).toLocaleDateString("en-US", {
// // // //                   month: "long",
// // // //                   day: "numeric",
// // // //                   year: "numeric",
// // // //                 })}
// // // //               </h4>
// // // //               {["10:00 am – 12:00 pm", "12:00 pm – 2:00 pm", "2:00 pm – 4:00 pm", "4:00 pm – 6:00 pm", "6:00 pm – 8:00 pm"].map(
// // // //                 (slot, index) => (
// // // //                   <Button key={index} className="d-block w-100 my-2" variant="success">
// // // //                     {slot} - Book Appointment
// // // //                   </Button>
// // // //                 )
// // // //               )}
// // // //             </div>
// // // //           )}
// // // //         </Col>
// // // //       </Row>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default AppointmentBooking;

// // // // 



// // import React, { useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { Container, Row, Col, Button } from "react-bootstrap";

// // const AppointmentBooking = () => {
// //   const today = new Date();
// //   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
// //   const [currentYear, setCurrentYear] = useState(today.getFullYear());
// //   const [selectedDate, setSelectedDate] = useState(today.getDate());

// //   const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

// //   const nextMonth = () => {
// //     setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
// //     setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
// //     setSelectedDate(null);
// //   };

// //   const handleDateClick = (day) => {
// //     setSelectedDate(day);
// //   };

// //   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
// //   const daysInMonth = getDaysInMonth(currentMonth, currentYear);

// //   const calendarGrid = [];
// //   let dayCounter = 1;

// //   while (dayCounter <= daysInMonth) {
// //     let week = new Array(7).fill(null); // Create a new week array each loop

// //     for (let i = 0; i < 7; i++) {
// //       if (calendarGrid.length === 0 && i < firstDayOfMonth) {
// //         week[i] = null;
// //       } else if (dayCounter <= daysInMonth) {
// //         week[i] = dayCounter++;
// //       }
// //     }
// //     calendarGrid.push(week);
// //   }

// //   return (
// //     <Container className="mt-5">
// //       <Row>
// //         <Col md={4}>
// //           <h3>How to book an appointment</h3>
// //           <ol>
// //             <li>Click on the desired date for which you would like to book the appointment.</li>
// //             <li>Select the available slot based on what time suits you the most.</li>
// //             <li>Fill all the details asked in the booking form. Don’t forget to enter your contact number.</li>
// //             <li>Submit and wait until you receive a confirmation of your appointment on the screen.</li>
// //           </ol>
// //         </Col>

// //         <Col md={8} className="text-center">
// //           <h3>Choose a Date</h3>
// //           <div className="calendar border p-3 rounded">
// //             <div className="d-flex justify-content-between align-items-center mb-2">
// //               <h5>
// //                 {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
// //               </h5>
// //               <Button variant="danger" size="sm" onClick={nextMonth}>➡️</Button>
// //             </div>

// //             <div className="d-flex font-weight-bold">
// //               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
// //                 <div key={day} className="w-100 text-center border p-1">{day}</div>
// //               ))}
// //             </div>

// //             {calendarGrid.map((week, rowIndex) => (
// //               <div key={rowIndex} className="d-flex">
// //                 {week.map((day, colIndex) => (
// //                   <div
// //                     key={colIndex}
// //                     className={`p-2 text-center border rounded m-1 ${day === null ? "invisible" : "bg-light cursor-pointer"}
// //                       ${selectedDate === day ? "bg-primary text-white" : ""}
// //                       ${day && new Date(currentYear, currentMonth, day) < today ? "text-muted" : ""}`}
// //                     style={{ width: "14.28%" }}
// //                     onClick={() => day && new Date(currentYear, currentMonth, day) >= today && handleDateClick(day)}
// //                   >
// //                     {day}
// //                   </div>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>

// //           {selectedDate && (
// //             <div className="mt-4 p-3 bg-light border rounded">
// //               <h4>
// //                 Available Appointments on {new Date(currentYear, currentMonth, selectedDate).toLocaleDateString("en-US", {
// //                   month: "long",
// //                   day: "numeric",
// //                   year: "numeric",
// //                 })}
// //               </h4>
// //               {["10:00 am – 12:00 pm", "12:00 pm – 2:00 pm", "2:00 pm – 4:00 pm", "4:00 pm – 6:00 pm", "6:00 pm – 8:00 pm"].map(
// //                 (slot, index) => (
// //                   <Button key={index} className="d-block w-100 my-2" variant="success">
// //                     {slot} - Book Appointment
// //                   </Button>
// //                 )
// //               )}
// //             </div>
// //           )}
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default AppointmentBooking;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const AppointmentBooking = () => {
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [selectedDate, setSelectedDate] = useState(null); // Initially null

//   const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

//   const nextMonth = () => {
//     setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
//     setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
//     setSelectedDate(null);
//   };

//   const handleDateClick = (day) => {
//     const selectedFullDate = new Date(currentYear, currentMonth, day);
    
//     if (selectedFullDate >= today) {
//       setSelectedDate(day); // Update only if the selected date is today or later
//     }
//   };

//   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//   const daysInMonth = getDaysInMonth(currentMonth, currentYear);

//   const calendarGrid = [];
//   let dayCounter = 1;

//   while (dayCounter <= daysInMonth) {
//     let week = new Array(7).fill(null);

//     for (let i = 0; i < 7; i++) {
//       if (calendarGrid.length === 0 && i < firstDayOfMonth) {
//         week[i] = null;
//       } else if (dayCounter <= daysInMonth) {
//         week[i] = dayCounter++;
//       }
//     }
//     calendarGrid.push(week);
//   }

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col md={4}>
//           <h3>How to book an appointment</h3>
//           <ol>
//             <li>Click on the desired date for which you would like to book the appointment.</li>
//             <li>Select the available slot based on what time suits you the most.</li>
//             <li>Fill all the details asked in the booking form. Don’t forget to enter your contact number.</li>
//             <li>Submit and wait until you receive a confirmation of your appointment on the screen.</li>
//           </ol>
//         </Col>

//         <Col md={8} className="text-center">
//           <h3>Choose a Date</h3>
//           <div className="calendar border p-3 rounded">
//             <div className="d-flex justify-content-between align-items-center mb-2">
//               <h5>
//                 {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
//               </h5>
//               <Button variant="danger" size="sm" onClick={nextMonth}>➡️</Button>
//             </div>

//             <div className="d-flex font-weight-bold">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                 <div key={day} className="w-100 text-center border p-1">{day}</div>
//               ))}
//             </div>

//             {calendarGrid.map((week, rowIndex) => (
//               <div key={rowIndex} className="d-flex">
//                 {week.map((day, colIndex) => (
//                   <div
//                     key={colIndex}
//                     className={`p-2 text-center border rounded m-1 
//                       ${day === null ? "invisible" : "bg-light cursor-pointer"}
//                       ${selectedDate === day ? "bg-primary text-white" : ""}
//                       ${day && new Date(currentYear, currentMonth, day) < today ? "text-muted" : ""}`}
//                     style={{ width: "14.28%" }}
//                     onClick={() => handleDateClick(day)}
//                   >
//                     {day}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {selectedDate && (
//             <div className="mt-4 p-3 bg-light border rounded">
//               <h4>
//                 Available Appointments on {new Date(currentYear, currentMonth, selectedDate).toLocaleDateString("en-US", {
//                   month: "long",
//                   day: "numeric",
//                   year: "numeric",
//                 })}
//               </h4>
//               {["10:00 am – 12:00 pm", "12:00 pm – 2:00 pm", "2:00 pm – 4:00 pm", "4:00 pm – 6:00 pm", "6:00 pm – 8:00 pm"].map(
//                 (slot, index) => (
//                   <Button key={index} className="d-block w-100 my-2" variant="success">
//                     {slot} - Book Appointment
//                   </Button>
//                 )
//               )}
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AppointmentBooking;



import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Clock } from "react-bootstrap-icons"; // Bootstrap icon for clock

const AppointmentSlots = ({ selectedDate }) => {
  const appointmentSlots = [
    "10:00 am – 12:00 pm",
    "12:00 pm – 2:00 pm",
    "2:00 pm – 4:00 pm",
    "4:00 pm – 6:00 pm",
    "6:00 pm – 8:00 pm",
  ];

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="p-4 bg-white border rounded shadow-sm">
            <h4 className="mb-3 text-center">
              Available Appointments on <strong>{selectedDate}</strong>
            </h4>
            {appointmentSlots.map((slot, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between border-bottom py-3"
              >
                <span className="d-flex align-items-center fs-7">
                  <Clock className="me-2 text-primary" size={20} />
                  {slot}
                </span>
                <Button variant="success" size="sm">
                  Book Appointment
                </Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const AppointmentBooking = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    const selectedFullDate = new Date(currentYear, currentMonth, day);
    if (selectedFullDate >= today) setSelectedDate(day);
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const calendarGrid = [];
  let dayCounter = 1;

  while (dayCounter <= daysInMonth) {
    let week = new Array(7).fill(null);
    for (let i = 0; i < 7; i++) {
      if (calendarGrid.length === 0 && i < firstDayOfMonth) {
        week[i] = null;
      } else if (dayCounter <= daysInMonth) {
        week[i] = dayCounter++;
      }
    }
    calendarGrid.push(week);
  }

  return (
    <Container className="mt-5">
      <Row>
        {/* Instructions Section */}
        <Col md={4}>
          <h3>How to Book an Appointment</h3>
          <ol>
            <li>Click on the desired date.</li>
            <li>Select an available time slot.</li>
            <li>Enter your details and confirm.</li>
            <li>Wait for the confirmation message.</li>
          </ol>
        </Col>

        {/* Calendar Section */}
        <Col md={7} className="text-center">
          <h3>Choose a Date</h3>
          <div className="calendar border p-3 rounded bg-white shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5>
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {currentYear}
              </h5>
              <Button variant="danger" size="sm" onClick={nextMonth}>
                ➡️
              </Button>
            </div>

            <div className="d-flex font-weight-bold">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="w-100 text-center border p-1">
                  {day}
                </div>
              ))}
            </div>

            {calendarGrid.map((week, rowIndex) => (
              <div key={rowIndex} className="d-flex">
                {week.map((day, colIndex) => (
                  <div
                    key={colIndex}
                    className={`p-2 text-center border rounded m-1 ${
                      day === null ? "invisible" : "bg-light cursor-pointer"
                    } ${selectedDate === day ? "bg-primary text-white" : ""} ${
                      day && new Date(currentYear, currentMonth, day) < today
                        ? "text-muted"
                        : "hover-effect"
                    }`}
                    style={{ width: "14.28%", cursor: day ? "pointer" : "default" }}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Show Available Slots when Date is Selected */}
          {selectedDate && (
            <AppointmentSlots
              selectedDate={new Date(currentYear, currentMonth, selectedDate).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentBooking;
