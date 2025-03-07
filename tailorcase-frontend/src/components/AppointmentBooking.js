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
    <Container className="mt-5" style={{maxWidth:"1400px"}}>
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
