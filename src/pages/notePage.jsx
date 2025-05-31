import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";

const NotePage = () => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        const savedTitle = localStorage.getItem("noteTitle");
        if (savedTitle) {
            setTitle(savedTitle);
        } else {
            setTitle("New Note");
        }
    }, []);

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        localStorage.setItem("noteTitle", newTitle);
    };

    return (
        <div className={""}>
            <Header title={title} editableTitle={true} onTitleChange={handleTitleChange} subtitle="" showBackButton={true} showSwitch={false} />
            <main className="flex-grow p-4">
            </main>
            <Footer />
        </div>
    )
}

export default NotePage