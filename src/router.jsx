import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage";
import NotePage from "./pages/notePage";
import NotFoundPage from "./pages/notFoundPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/note/:id" element={<NotePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;