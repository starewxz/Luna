import Switch from "./Switch";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const Header = ({
                    title = "LUNA",
                    subtitle = "by Noterⓒ",
                    showSwitch = true,
                    showBackButton = false,
                    editableTitle = false,
                    onTitleChange,
                }) => {
    const navigate = useNavigate();

    return (
        <header className="bg-header-light dark:bg-header-dark text-text-light dark:text-primary-dark px-4 sm:px-6 py-4 flex items-center justify-between relative dark:shadow-[0_0_10px_0_rgba(249,168,38,1)] shadow-violet">

            <div className="w-10 flex justify-start z-10">
                {showBackButton && (
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-md hover:bg-opacity-20 hover:bg-primary-light dark:hover:bg-[#efbe8c] transition-all duration-200"
                    >
                        <FontAwesomeIcon icon={faCaretLeft} className="text-2xl text-primary-light dark:text-primary-dark" />
                    </button>
                )}
            </div>

            {editableTitle ? (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <input
                        type="text"
                        value={title}
                        onChange={onTitleChange}
                        placeholder="Enter title"
                        className=" bg-transparent border-b border-[#8A63D2] text-[#1E1E2F] focus:outline-none text-xl font-light font-[McLaren] text-center"
                    />
                </div>
            ) : (
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-light font-[McLaren] tracking-wide">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-[10px] font-semibold lg:text-[15px] mt-1">{subtitle}</p>
                    )}
                </div>
            )}

            <div className="w-10 flex justify-end z-10">
                {showSwitch && <Switch />}
            </div>
        </header>
    );
};

export default Header;
