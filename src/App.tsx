import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ApplicationPage from "./pages/ApplicationPage";
import CommunityPage from "./pages/CommunityPage";
import TermsCondition from "./pages/TermsCondition";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/community-page" element={<CommunityPage />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>
    </BrowserRouter>
  );
}
