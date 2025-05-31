import { ConfigProvider } from "antd";
import { ThemeProvider } from './services/theme-service';
import { createRoot } from 'react-dom/client'
import './styles.css'
import Router from "./router";

createRoot(document.getElementById('root')).render(
    <ConfigProvider>
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    </ConfigProvider>
)