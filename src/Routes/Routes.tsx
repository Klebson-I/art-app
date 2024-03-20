import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../Pages/App/App";
import { Quiz } from "../Pages/Quiz/Quiz";



export const GlobalRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="quiz" element={<Quiz />}/>
        </Routes>
    </BrowserRouter>
};