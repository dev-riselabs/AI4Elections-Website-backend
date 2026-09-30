import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ApplicationPage from "./pages/ApplicationPage";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/application' element={<ApplicationPage/>} />
    </Routes>
    </BrowserRouter>
  );
}
