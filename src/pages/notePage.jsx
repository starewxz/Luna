import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("New Note");
    const [content, setContent] = useState("");
    const textareaRef = useRef(null);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const currentNote = savedNotes.find(note => note.id === id);
        if (currentNote) {
            setTitle(currentNote.title);
            setContent(currentNote.content);
        }
    }, [id]);

    useEffect(() => {
        autoResize();
    }, [content]);

    const autoResize = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        updateNoteInStorage(newTitle, content);
    };

    const handleContentChange = (e) => {
        const newContent = e.target.value;
        setContent(newContent);
        updateNoteInStorage(title, newContent);
    };

    const updateNoteInStorage = (newTitle, newContent) => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const updatedNotes = savedNotes.map(note =>
            note.id === id ? { ...note, title: newTitle, content: newContent } : note
        );
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    return (
        <div className="min-h-screen flex flex-col overflow-y-auto">
            <Header
                title={title}
                editableTitle={true}
                onTitleChange={handleTitleChange}
                subtitle=""
                showBackButton={true}
                showSwitch={false}
            />
            <main className="flex-grow p-4 pt-[80px] pb-[60px] relative">
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Start writing your note here..."
                    className="note w-full p-4 bg-white dark:bg-[#1E1E2F] text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none resize-none leading-relaxed text-base"
                    rows={1}
                />
            </main>
            <Footer />
        </div>
    );
};

export default NotePage;