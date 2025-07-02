import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import GroupForm from "./pages/GroupForm";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

// Public pages
import Landing from "./pages/public/Landing";
import Pricing from "./pages/public/Pricing";
import Features from "./pages/public/Features";
import Help from "./pages/public/Help";
import Contact from "./pages/public/Contact";
import TermsOfService from "./pages/public/TermsOfService";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import UserDetails from "./pages/admin/UserDetails";

// User settings
import UserSettings from "./pages/UserSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/funcionalidades" element={<Features />} />
          <Route path="/central-de-ajuda" element={<Help />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/termos-de-servico" element={<TermsOfService />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* App Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/groups/:id" element={<GroupForm />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/configuracoes" element={<UserSettings />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/usuarios" element={<UserManagement />} />
          <Route path="/admin/usuarios/:id" element={<UserDetails />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
