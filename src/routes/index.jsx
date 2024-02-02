import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AdminPage from "../pages/AdminPage";
import User from "../pages/User";
import DetailPage from "../pages/DetailPage";
import Login from "../pages/Login";
import AccountSignup from "../pages/AccountSignup";
import ReservePage from "../pages/ReservePage";


export function RouteList() {
    return (
      <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<AccountSignup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/detail/:id/reservation" element={<ReservePage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/:userId/reservas" element={<User />} />
            </Routes>
        </BrowserRouter>
      </>
    )
  }
  
