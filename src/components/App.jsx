import React, {useState, useEffect, useRef} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    const isFirstRender = useRef(true);

    useEffect(() => {
        const saved = localStorage.getItem("keeper-notes");
        if (saved) {
            setNotes(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem("keeper-notes", JSON.stringify(notes));
    }, [notes]);

    function trackTitle(event) {
        setTitle(event.target.value);
    }
    function trackNote(event) {
        setNote(event.target.value);
    }

    function addNote() {
        if (title.trim() || note.trim()) {
            setNotes([...notes, { title, content: note }]);
            setTitle("");
            setNote("");
        }
    }

    function deleteNote(id) {
        setNotes(notes.filter((_, index) => index !== id));
    }
    function editNote(id, updatedNote) {
        setNotes((prevNotes) =>
            prevNotes.map((note, index) => (index === id ? updatedNote : note))
        );
    }

    return (
        <div style={{ flexGrow: 1 }}>
            <Header />
            <CreateArea
                trackTitle={trackTitle}
                trackNote={trackNote}
                addNote={addNote}
                title={title}
                note={note}
            />
            {notes.map((item, index) => (
                <Note
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    onDelete={deleteNote}
                    onEdit={editNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
