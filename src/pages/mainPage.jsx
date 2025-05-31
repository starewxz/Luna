import Header from "../components/Header";
import Footer from "../components/Footer";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col relative">
            <Header />
            <main className="flex-grow">

            </main>
            <Footer />
            <Button
                className="plus-button bg-[#8A63D2] text-white hover:!bg-[#644693] active:!bg-[#1E1E2F]
                 rounded-full w-14 h-14 flex items-center justify-center
                 hover:shadow-xl active:shadow-md
                 transition duration-200 ease-in-out
                 active:scale-95
                 fixed bottom-5 right-5 z-50 shadow-violet"
                 type="primary" onClick={() => navigate("/note")}
            >
                <FontAwesomeIcon icon={faPlus} className="text-xl" />
            </Button>
        </div>
    );
};

export default MainPage;
