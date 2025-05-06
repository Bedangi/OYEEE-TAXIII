import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi, faHome, faCalendarAlt,     faUserFriends, faCar, faUser, faPhone, faUserTie, faSyncAlt, faMapLocation, faCreditCard, faMapPin, faTasks, faGift, faExchangeAlt,faUsers, faHistory, } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  // Dashboard Cards
  const [dashboardbookings, setDashboardBookings] = useState([]);
  const [dashboarddrivers, setDashboardDrivers] = useState([]);
  const [dashboardcabs, setDashboardCabs] = useState([]);
  const [dashboardcarpools, setDashboardCarpools] = useState([]);
  const [dashboardpoints, setDashboardPoints] = useState([]);
  const [dashboardrevenue, setDashboardRevenue] = useState([]);

  const [customers, setCustomers] = useState([]);//to store the fetch data
  const [drivers, setDrivers] = useState([]);
  const [cabs, setCabs] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [rideHistory, setRideHistory] = useState([]);
  const [rideLocations, setRideLocations] = useState([]);
  const [payments, setPayments] = useState([]);
  const [stopPoolingPoints, setStopPoolingPoints] = useState([]);
  const [ridePoolingAssignments, setRidePoolingAssignments] = useState([]);
  const [loyaltyPoints, setLoyaltyPoints] = useState([]);
  const [loyaltyTransactions, setLoyaltyTransactions] = useState([]);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };

//customers
useEffect(() => {
  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/customers");
      console.log("Customers API response data:", response.data);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers data:", error);
    }
  };

  fetchCustomers();
}, []);
//drivers data
useEffect(() => {
  const fetchDrivers = async () => {
    try {
      // Fetch drivers data from the backend
      const response = await axios.get("http://localhost:3000/drivers");
      console.log("API response data:", response.data); // Log the data to check the response

      // Set the drivers data in state
      setDrivers(response.data);
    } catch (error) {
      console.error("Error fetching driver data:", error);
    }
  };

  fetchDrivers(); // Fetch the data when component mounts
}, []); 
//cabs
useEffect(() => {
  const fetchCabs= async () => {
    try {
      // Fetch drivers data from the backend
      const response = await axios.get("http://localhost:3000/cabs");
      console.log("API response data:", response.data); // Log the data to check the response

      // Set the drivers data in state
      setCabs(response.data);
    } catch (error) {
      console.error("Error fetching driver data:", error);
    }
  };

  fetchCabs(); // Fetch the data when component mounts
}, []);
//bookings data
useEffect(() => {
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bookings");
      console.log("API response data: ", response.data);
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };
  fetchBookings();
}, []);
//ride his
useEffect(() => {
  const fetchRideHistory = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ride-history");
      console.log("RideHistory API response data:", response.data);
      setRideHistory(response.data);
    } catch (error) {
      console.error("Error fetching ride history data:", error);
    }
  };

  fetchRideHistory();
}, []);
//ride loc
useEffect(() => {
  const fetchRideLocations = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ride-locations");
      console.log("RideLocations API response data:", response.data);
      setRideLocations(response.data);
    } catch (error) {
      console.error("Error fetching ride locations data:", error);
    }
  };

  fetchRideLocations();
}, []);
//pay
useEffect(() => {
  const fetchPayments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/payments");
      console.log("Payments API response data:", response.data);
      setPayments(response.data);
    } catch (error) {
      console.error("Error fetching payments data:", error);
    }
  };

  fetchPayments();
}, []);
//stoppool
useEffect(() => {
  const fetchStopPoolingPoints = async () => {
    try {
      const response = await axios.get("http://localhost:3000/stop-pooling-points");
      console.log("StopPoolingPoints API response data:", response.data);
      setStopPoolingPoints(response.data);
    } catch (error) {
      console.error("Error fetching stop pooling points data:", error);
    }
  };

  fetchStopPoolingPoints();
}, []);
//ridepool
useEffect(() => {
  const fetchRidePoolingAssignments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ride-pooling-assignments");
      console.log("RidePoolingAssignments API response data:", response.data);
      setRidePoolingAssignments(response.data);
    } catch (error) {
      console.error("Error fetching ride pooling assignments data:", error);
    }
  };

  fetchRidePoolingAssignments();
}, []);
//loy
useEffect(() => {
  const fetchLoyaltyPoints = async () => {
    try {
      const response = await axios.get("http://localhost:3000/loyalty-points");
      console.log("LoyaltyPoints API response data:", response.data);
      setLoyaltyPoints(response.data);
    } catch (error) {
      console.error("Error fetching loyalty points data:", error);
    }
  };

  fetchLoyaltyPoints();
}, []);
//loytrans
useEffect(() => {
  const fetchLoyaltyTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/loyalty-transactions");
      console.log("LoyaltyTransactions API response data:", response.data);
      setLoyaltyTransactions(response.data);
    } catch (error) {
      console.error("Error fetching loyalty transactions data:", error);
    }
  };

  fetchLoyaltyTransactions();
}, []);

//DashboardBookings
useEffect(() => {
  const fetchDashboardBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dashboardBookings");
      console.log("Customers API response data:", response.data);
      setDashboardBookings(response.data);
    } catch (error) {
      console.error("Error fetching customers data:", error);
    }
  };

  fetchDashboardBookings();
}, []);
//DashboardCabs
useEffect(() => {
  const fetchDashboardCabs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dashboardCabs");
      console.log("Customers API response data:", response.data);
      setDashboardCabs(response.data);
    } catch (error) {
      console.error("Error fetching customers data:", error);
    }
  };

  fetchDashboardCabs();
}, []);
//DashboardDrivers
useEffect(() => {
  const fetchDashboardDrivers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dashboardDrivers");
      console.log("Customers API response data:", response.data);
      setDashboardDrivers(response.data);
    } catch (error) {
      console.error("Error fetching customers data:", error);
    }
  };

  fetchDashboardDrivers();
}, []);
//DashboardPoints
useEffect(() => {
  const fetchDashboardPoints = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dashboardPoints");
      console.log("Customers API response data:", response.data);
      setDashboardPoints(response.data);
    } catch (error) {
      console.error("Error fetching customers data:", error);
    }
  };

  fetchDashboardPoints();
}, []);
//DashboardCarpools
useEffect(() => {
  const fetchDashboardCarpools = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dashboardCarpools");
      console.log("Customers API response data:", response.data);
      setDashboardCarpools(response.data);
    } catch (error) {
      console.error("Error fetching customers data:", error);
    }
  };

  fetchDashboardCarpools();
}, []);
//DashboardRevenue
useEffect(() => {
  const fetchDashboardRevenue = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dashboardRevenue");
      console.log("Customers API response data:", response.data);
      setDashboardRevenue(response.data);
    } catch (error) {
      console.error("Error fetching customers data:", error);
    }
  };

  fetchDashboardRevenue();
}, []);


  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <div className="container">
              <header>
                <h1><FontAwesomeIcon icon={faTaxi} /> OYEEE TAXIII</h1>
                <div className="user-controls">
                  <button id="loginBtn">Login</button>
                  <button id="logoutBtn" onClick={handleLogout}>Logout</button>
                </div>
              </header>

              <nav>
                <ul>
                  <li><a href="#" className={activeSection === "dashboard" ? "active" : ""} onClick={() => handleNavigation("dashboard")}><FontAwesomeIcon icon={faHome} /> Dashboard</a></li>
                  <li><a href="#" className={activeSection === "customers" ? "active" : ""} onClick={() => handleNavigation("customers")}><FontAwesomeIcon icon={faUsers} /> Customers</a></li>
                  <li><a href="#" className={activeSection === "drivers" ? "active" : ""} onClick={() => handleNavigation("drivers")}><FontAwesomeIcon icon={faUserFriends} /> Drivers</a></li>
                  <li><a href="#" className={activeSection === "cabs" ? "active" : ""} onClick={() => handleNavigation("cabs")}><FontAwesomeIcon icon={faCar} /> Cabs</a></li>
                  <li><a href="#" className={activeSection === "bookings" ? "active" : ""} onClick={() => handleNavigation("bookings")}><FontAwesomeIcon icon={faCalendarAlt} /> Bookings</a></li>
                  <li><a href="#" className={activeSection === "rideHistory" ? "active" : ""} onClick={() => handleNavigation("rideHistory")}><FontAwesomeIcon icon={faHistory} /> Ride History</a></li>

                  <li><a href="#" className={activeSection === "rideLocations" ? "active" : ""} onClick={() => handleNavigation("rideLocations")}><FontAwesomeIcon icon={faMapLocation} /> Ride Locations</a></li>

                  <li><a href="#" className={activeSection === "payments" ? "active" : ""} onClick={() => handleNavigation("payments")}><FontAwesomeIcon icon={faCreditCard} /> Payments</a></li>
                  <li><a href="#" className={activeSection === "stopPoolingPoints" ? "active" : ""} onClick={() => handleNavigation("stopPoolingPoints")}><FontAwesomeIcon icon={faMapPin} /> Stop Pooling Points</a></li>
                  {/* <li><a href="#" className={activeSection === "ridePoolingAssignments" ? "active" : ""} onClick={() => handleNavigation("ridePoolingAssignments")}><FontAwesomeIcon icon={faTasks} /> Ride Pooling Assignments</a></li>
                  <li><a href="#" className={activeSection === "loyaltyPoints" ? "active" : ""} onClick={() => handleNavigation("loyaltyPoints")}><FontAwesomeIcon icon={faGift} /> Loyalty Points</a></li> */}
                  <li><a href="#" className={activeSection === "loyaltyTransactions" ? "active" : ""} onClick={() => handleNavigation("loyaltyTransactions")}><FontAwesomeIcon icon={faExchangeAlt} /> Loyalty Transactions</a></li>
                </ul>
              </nav>

              <main>
                {activeSection === "dashboard" && (
                <section id="dashboard" className="active-section">
                  <h2><FontAwesomeIcon icon={faTaxi} /> Dashboard Overview</h2>
                  
                  <div class="stats-grid">
                    <div class="stat-card">
                        <h3>Total Bookings</h3>
                        <p id="total-bookings">{dashboardbookings[0]?.COUNT || 0}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Total Drivers</h3>
                        <p id="active-drivers">{dashboarddrivers[0]?.COUNT || 0}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Total Cabs</h3>
                        <p id="available-vehicles">{dashboardcabs[0]?.COUNT || 0}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Total Revenue</h3>
                        <p id="total-revenue">₹{dashboardrevenue[0]?.FARE || 0}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Total Carpools</h3>
                        <p id="total-carpools">{dashboardcarpools[0]?.COUNT || 0}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Maximum Points</h3>
                        <p id="total-points">{dashboardpoints[0]?.MAX || 0}</p>
                    </div>
                  </div>
                      

                </section>
                )}
                {activeSection === "customers" && (
                  <section id="customers" className="active-section">
                    <h2><FontAwesomeIcon icon={faUser} /> Manage Customers</h2>
                    <table>
                      <thead>
                        <tr>
                          <th>Customer ID</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody id="customers-table">
                        {customers.length > 0 ? (
                          customers.map((customer, index) => (
                            <tr key={index}>
                              <td>{customer.CUSTOMER_ID}</td>
                              <td>{customer.NAME}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No customers available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "drivers" && (
                  <section id="drivers" className="active-section">
                  <h2><FontAwesomeIcon icon={faUserTie} /> Manage Drivers</h2>
                  
                      {drivers.length > 0 ? (
                        <table>
                        <thead>
                          <tr>
                            <th>Driver ID</th>
                            <th>Name</th>
                            <th>License Number</th>
                            <th>Rating</th>
                            <th>Total Rides</th>
                            <th>Contact</th>
                          </tr>
                        </thead>
                        <tbody id="drivers-table">
                          {drivers.map((driver) => (
                            <tr key={driver.DI}>
                              <td>{driver.DI}</td>
                              <td>{driver.DN}</td>
                              <td>{driver.LN}</td>
                              <td>{driver.R}</td>
                              <td>{driver.TR}</td>
                              <td>{driver.PHONE}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>No drivers available.</p>
                    )}
                  
                  </section>
                )}
                {activeSection === "bookings" && (
                  <section id="bookings" className="active-section">
                  <h2><FontAwesomeIcon icon={faCalendarAlt} />Manage Bookings</h2>
                  
                  <table>
                      <thead>
                          <tr>
                              <th>Booking ID</th>
                              <th>Customer ID</th>
                              <th>Cab ID</th>
                              <th>Booking Date</th>
                              <th>Pickup</th>
                              <th>Drop</th>
                              <th>Fare</th>
                              <th>Discount</th>
                              <th>Carpooling</th>
                          </tr>
                      </thead>
                      <tbody id="bookings-table">
                      {bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                          <tr key={index}>
                            <td> {booking.BOOKING_ID}</td>
                            <td>{booking.CUSTOMER_ID}</td>
                            <td>{booking.CAB_ID}</td>
                            <td>{new Date(booking.BOOKING_DATE).toLocaleString()}</td>
                            <td>{booking.PICKUP_LOCATION}</td>
                            <td>{booking.DROP_LOCATION}</td>
                            <td>${booking.FARE}</td>
                            <td>{booking.DISCOUNT_APPLIED}%</td>
                            <td>{booking.IS_CARPOOL === 'Y' ? 'Yes' : 'No'}</td>
                          </tr>
                        ))
                      ) : (
                        <p>No bookings available.</p>
                      )}
                    </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "cabs" && (
                  <section id="vehicles" className="active-section">
                    <h2><FontAwesomeIcon icon={faCar} /> Manage Cabs</h2>
                    
                    <table>
                      <thead>
                          <tr>
                              <th>Cab ID</th>
                              <th>Number</th>
                              <th>Type</th>
                              <th>Availability</th>
                              <th>Eco Friendly</th>
                              <th>Driver ID</th>
                          </tr>
                      </thead>
                      <tbody id="vehicles-table">
                      {cabs.length > 0 ? (
                        cabs.map((cab, index) => (
                          <tr key={index}>
                            <td>{cab.CAB_ID}</td>
                            <td>{cab.CAB_NUMBER}</td>
                            <td>{cab.CAB_TYPE}</td>
                            <td>{cab.IS_AVAILABLE === 'Y' ? 'Available' : 'Not Available'}</td>
                            <td>{cab.ECO_FRIENDLY === 'Y' ? 'Yes' : 'No'}</td>
                            <td>{cab.DRIVER_ID}</td>
                          </tr>
                        ))
                      ) : (
                        <p>No cabs available.</p>
                      )}
                    </tbody>
                    </table>
                  </section>
                )} 
                {activeSection === "rideHistory" && (
                  <section id="rideHistory" className="active-section">
                    <h2><FontAwesomeIcon icon={faHistory} /> Manage Ride History</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>History ID</th>
                          <th>Booking ID</th>
                          <th>Pickup Time</th>
                          <th>Drop Time</th>
                          <th>Distance (KM)</th>
                          <th>Fare</th>
                        </tr>
                      </thead>
                      <tbody id="rideHistory-table">
                        {rideHistory.length > 0 ? (
                          rideHistory.map((ride, index) => (
                            <tr key={index}>
                              <td>{ride.HISTORY_ID}</td>
                              <td>{ride.BOOKING_ID}</td>
                              <td>{new Date(ride.ACTUAL_PICKUP_TIME).toLocaleString()}</td>
                              <td>{new Date(ride.ACTUAL_DROP_TIME).toLocaleString()}</td>
                              <td>{ride.ACTUAL_DISTANCE_KM}</td>
                              <td>${ride.ACTUAL_FARE}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No ride history available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "rideLocations" && (
                  <section id="rideLocations" className="active-section">
                    <h2><FontAwesomeIcon icon={faMapLocation} /> Manage Ride Locations</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>Location ID</th>
                          <th>History ID</th>
                          <th>Location Type</th>
                          <th>Address</th>
                          <th>Recorded Time</th>
                        </tr>
                      </thead>
                      <tbody id="rideLocations-table">
                        {rideLocations.length > 0 ? (
                          rideLocations.map((location, index) => (
                            <tr key={index}>
                              <td>{location.LOCATION_ID}</td>
                              <td>{location.HISTORY_ID}</td>
                              <td>{location.LOCATION_TYPE}</td>
                              <td>{location.ADDRESS}</td>
                              <td>{new Date(location.RECORDED_TIME).toLocaleString()}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No ride locations available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "payments" && (
                  <section id="payments" className="active-section">
                    <h2><FontAwesomeIcon icon={faCreditCard} /> Manage Payments</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>Payment ID</th>
                          <th>Booking ID</th>
                          <th>Payment Method</th>
                          <th>Payment Status</th>
                          <th>Payment Amount</th>
                        </tr>
                      </thead>
                      <tbody id="payments-table">
                        {payments.length > 0 ? (
                          payments.map((payment, index) => (
                            <tr key={index}>
                              <td>{payment.PAYMENT_ID}</td>
                              <td>{payment.BOOKING_ID}</td>
                              <td>{payment.PAYMENT_METHOD}</td>
                              <td>{payment.PAYMENT_STATUS}</td>
                              <td>${payment.PAYMENT_AMOUNT}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No payments available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "stopPoolingPoints" && (
                  <section id="stopPoolingPoints" className="active-section">
                    <h2><FontAwesomeIcon icon={faMapPin} /> Manage Stop Pooling Points</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>Point ID</th>
                          <th>Location Name</th>
                          <th>Latitude</th>
                          <th>Longitude</th>
                          <th>Is Active</th>
                        </tr>
                      </thead>
                      <tbody id="stopPoolingPoints-table">
                        {stopPoolingPoints.length > 0 ? (
                          stopPoolingPoints.map((point, index) => (
                            <tr key={index}>
                              <td>{point.POINT_ID}</td>
                              <td>{point.LOCATION_NAME}</td>
                              <td>{point.LATITUDE}</td>
                              <td>{point.LONGITUDE}</td>
                              <td>{point.IS_ACTIVE === 'Y' ? 'Yes' : 'No'}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No stop pooling points available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "ridePoolingAssignments" && (
                  <section id="ridePoolingAssignments" className="active-section">
                    <h2><FontAwesomeIcon icon={faShareAlt} /> Manage Ride Pooling Assignments</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>Assignment ID</th>
                          <th>Booking ID</th>
                          <th>Point ID</th>
                          <th>Assigned Time</th>
                        </tr>
                      </thead>
                      <tbody id="ridePooling-table">
                        {ridePoolingAssignments.length > 0 ? (
                          ridePoolingAssignments.map((assignment, index) => (
                            <tr key={index}>
                              <td>{assignment.ASSIGNMENT_ID}</td>
                              <td>{assignment.BOOKING_ID}</td>
                              <td>{assignment.POINT_ID}</td>
                              <td>{new Date(assignment.ASSIGNED_TIME).toLocaleString()}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No pooling assignments available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "loyaltyPoints" && (
                  <section id="loyaltyPoints" className="active-section">
                    <h2><FontAwesomeIcon icon={faStar} /> Manage Loyalty Points</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>Customer ID</th>
                          <th>Total Points</th>
                          <th>Last Updated</th>
                        </tr>
                      </thead>
                      <tbody id="loyaltyPoints-table">
                        {loyaltyPoints.length > 0 ? (
                          loyaltyPoints.map((points, index) => (
                            <tr key={index}>
                              <td>{points.CUSTOMER_ID}</td>
                              <td>{points.TOTAL_POINTS}</td>
                              <td>{new Date(points.LAST_UPDATED).toLocaleString()}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No loyalty points data available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
                {activeSection === "loyaltyTransactions" && (
                  <section id="loyaltyTransactions" className="active-section">
                    <h2><FontAwesomeIcon icon={faExchangeAlt} /> Manage Loyalty Transactions</h2>
                    
                    <table>
                      <thead>
                        <tr>
                          <th>Transaction ID</th>
                          <th>Customer</th>
                          <th>Points Earned</th>
                          <th>Points Redeemed</th>
                          <th>Transaction Date</th>
                        </tr>
                      </thead>
                      <tbody id="loyaltyTransactions-table">
                        {loyaltyTransactions.length > 0 ? (
                          loyaltyTransactions.map((transaction, index) => (
                            <tr key={index}>
                              <td>{transaction.TI}</td>
                              <td>{transaction.CN}</td>
                              <td>{transaction.PE}</td>
                              <td>{transaction.PR}</td>
                              <td>{new Date(transaction.TD).toLocaleString()}</td>
                            </tr>
                          ))
                        ) : (
                          <p>No loyalty transactions available.</p>
                        )}
                      </tbody>
                    </table>
                  </section>
                )}
              </main>
            </div>
          </ProtectedRoute>
        } />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    
  );
}

export default App;
