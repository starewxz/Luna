import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../services/theme-service";

const Switch = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <StyledWrapper>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={!darkMode} // ✅ checked = light mode
                    onChange={toggleTheme}
                />
                <span className="slider" />
            </label>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2em;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        --background: #ffffff;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.5s;
        border-radius: 30px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 50%;
        left: 10%;
        bottom: 15%;
        box-shadow: inset 8px -4px 0 0 #F9A826;
        transition: 0.5s;
    }

    input:checked + .slider {
        background-color: #8a63d2;
        box-shadow: 2px -2px 0 0 #53537a;
    }

    input:checked + .slider:before {
        transform: translateX(100%);
        box-shadow: inset 15px -4px 0 15px #ffd700;
    }
`;

export default Switch;
