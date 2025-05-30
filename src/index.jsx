import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";
import "/styles.css";
import {ThemeProvider} from "./services/theme-service.jsx";

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
);
