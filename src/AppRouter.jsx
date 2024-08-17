import { ChatProvider } from "./contexts/ChatContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./ui/PageNotFound";
import AppLayOut from "./ui/AppLayOut";
import ChatPage from "./pages/ChatPage";
import TeamsPage from "./pages/TeamsPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import PreviousWorksPage from "./pages/PreviousWorksPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import AppointmentDetailsPage from "./pages/AppointmentDetailsPage";
import RecordsPage from "./pages/RecordsPage";
import ReadyMadeSystemsPage from "./pages/ReadyMadeSystemsPage";
import InvoicesPage from "./pages/InvoicesPage";
import InvoiceDetailsPage from "./pages/InvoiceDetailsPage";
import RecordDetailsPage from "./pages/RecordDetailsPage";
import SettingsPage from "./pages/SettingsPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayOut />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productID" element={<ProductDetailsPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route
            path="chat"
            element={
              <ChatProvider>
                <ChatPage />
              </ChatProvider>
            }
          />
          <Route path="previous-works" element={<PreviousWorksPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route
            path="appointments/:appointmentID"
            element={<AppointmentDetailsPage />}
          />
          <Route path="records" element={<RecordsPage />} />
          <Route path="records/:recordID" element={<RecordDetailsPage />} />
          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="invoices/:invoiceID" element={<InvoiceDetailsPage />} />
          <Route path="ready-made-systems" element={<ReadyMadeSystemsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
