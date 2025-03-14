
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Membership from "./pages/Membership";
import LookBook from "./pages/LookBook";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Appointments from "./pages/dashboard/Appointments";
import History from "./pages/dashboard/History";
import Favorites from "./pages/dashboard/Favorites";
import Rewards from "./pages/dashboard/Rewards";
import Messages from "./pages/dashboard/Messages";
import Settings from "./pages/dashboard/Settings";
import Payment from "./pages/dashboard/Payment";
import Schedule from "./pages/dashboard/Schedule";
import Clients from "./pages/dashboard/Clients";
import BarberServices from "./pages/dashboard/BarberServices";
import Earnings from "./pages/dashboard/Earnings";
import Reviews from "./pages/dashboard/Reviews";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import Staff from "./pages/dashboard/Staff";
import Customers from "./pages/dashboard/Customers";
import Analytics from "./pages/dashboard/Analytics";
import Shop from "./pages/dashboard/Shop";
import Inventory from "./pages/dashboard/Inventory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/lookbook" element={<LookBook />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Dashboard />} />
                <Route path="booking" element={<Booking />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="history" element={<History />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="rewards" element={<Rewards />} />
                <Route path="messages" element={<Messages />} />
                <Route path="settings" element={<Settings />} />
                <Route path="payment" element={<Payment />} />
                
                {/* Barber routes */}
                <Route path="schedule" element={<Schedule />} />
                <Route path="clients" element={<Clients />} />
                <Route path="services" element={<BarberServices />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="reviews" element={<Reviews />} />
                
                {/* Admin routes */}
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="staff" element={<Staff />} />
                <Route path="customers" element={<Customers />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="shop" element={<Shop />} />
                <Route path="inventory" element={<Inventory />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
