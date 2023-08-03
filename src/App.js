import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Forgortpassscreen from "./screens/Forgortpassscreen";
import Verifycodescreen from "./screens/Verifycodescreen";
import Changepassscreen from "./screens/Changepassscreen";
import Changepasssuccesfulscreen from "./screens/Changepasssuccesfulscreen";
import Enteremailcodescreen from "./screens/Enteremailcodescreen";
import Emailsuccessscreen from "./screens/Emailsuccessscreen";
import Dashboardscreen from "./screens/Dashboardscreen";
import Viewsingleproductscreen from "./screens/Viewsingleproductscreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/register" element={<Registerscreen />} />
        <Route path="/login" element={<Loginscreen />} />
        <Route path="/forgot" element={<Forgortpassscreen />} />
        <Route path="/verifycode" element={<Verifycodescreen />} />
        <Route path="/changepass" element={<Changepassscreen />} />
        <Route
          path="/changepasssuccess"
          element={<Changepasssuccesfulscreen />}
        />
        <Route path="/emailverifycode" element={<Enteremailcodescreen />} />
        <Route path="/emailsuccess" element={<Emailsuccessscreen />} />
        <Route path="/dashboard" element={<Dashboardscreen />} />
        <Route
          path="/viewsinglepolicy/:productid"
          element={<Viewsingleproductscreen />}
        />
      </Routes>
    </Router>
  );
}

export default App;
