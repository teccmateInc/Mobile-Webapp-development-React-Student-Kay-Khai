import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DirectionPage from "./pages/DirectionPage";
import Villages from "./pages/Villages";
import Exhibitors from "./pages/ExhibitorPage";
import VillageDetails from "./pages/VillageDetails";
import ExhibitorDetails from "./pages/ExhibitorDetailPage";
import DirectoryPage from "./pages/DirectoryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="direction" element={<DirectionPage />} />
            <Route path="villages" element={<Villages />} />
            <Route path="village/:id" element={<VillageDetails />} />
            <Route path="exhibitors" element={<Exhibitors />} />
            <Route path="exhibitor/:id" element={<ExhibitorDetails />} />
            <Route path="directory" element={<DirectoryPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
