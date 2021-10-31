import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound"
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Account/Login/Login";
import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Account/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/MyOrders/MyOrders";
import AddOfferings from "./Pages/AddOfferings/AddOfferings";
import ManageBooking from "./Pages/ManageBooking/ManageBooking";

function App() {
  return (
    <div className="App" >
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/AddOfferings">
              <AddOfferings></AddOfferings>
            </Route>
            <Route path="/manageBooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
