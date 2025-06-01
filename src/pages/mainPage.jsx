import Header from "../components/Header";
import Footer from "../components/Footer";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Popconfirm } from 'antd';

const MainPage = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    const getSimpleTimestamp = () => {
        const now = new Date();
        return `${now.getDay()}${now.getHours()}${now.getMinutes()}`;
    };
    const timestamp = getSimpleTimestamp();

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(savedNotes);
    }, []);

    const createNewNote = () => {
        const newNote = {
            id: Date.now().toString(), // Fixed: toLocaleString() was incorrect here
            title: "New Note",
            content: "",
            date: timestamp,
        };
        const updatedNotes = [newNote, ...notes];
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        navigate(`/note/${newNote.id}`); // Navigate to the new note's page
    }
    const deleteNote = (id, e) => {
        e.stopPropagation();
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-y-auto">
            <Header />
            <main className="flex-grow px-4 py-4 w-full max-w-4xl mx-auto gap-4 pt-[80px] pb-[60px] mt-8">
                <div className="space-y-4 w-full">
                    {notes.map((note) => (
                        <div
                            key={note.id}
                            className="bg-[#F5F4FA] dark:bg-[#1E1E2F] p-4 rounded-xl cursor-pointer hover:shadow-lg transition relative note"
                            onClick={() => navigate(`/note/${note.id}`)}
                        >
                            <Popconfirm
                                title="Delete this note?"
                                onConfirm={(e) => {
                                    e?.stopPropagation();
                                    deleteNote(note.id, e);
                                }}
                                onCancel={(e) => e?.stopPropagation()}
                                okText="Yes"
                                cancelText="No"
                            >
                                <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute top-2 right-2 p-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                                    aria-label="Delete note"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </Popconfirm>
                            <h2 className="text-xl font-semibold text-[#8A63D2] dark:text-[#F9A826] pr-6">
                                {note.title}
                            </h2>
                            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                                {note.content.slice(0, 100) || "No content..."}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
            <Button
                draggable={true}
                className="plus-button bg-primary-light dark:bg-primary-dark text-white hover:!bg-[#644693] dark:hover:!bg-[#d5961c] rounded-full w-14 h-14 flex items-center justify-center fixed bottom-14 right-0 z-50 shadow-lg transition-all"
                type="primary"
                onClick={createNewNote}
            >
                <FontAwesomeIcon icon={faPlus} className="text-xl" />
            </Button>
        </div>
    );
};

export default MainPage;