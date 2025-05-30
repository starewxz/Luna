import React from "react";

function CreateArea({ trackTitle, trackNote, addNote, title, note }) {
    return (
        <div>
            <form className="create-area">
                <input
                    name="title"
                    placeholder="Title"
                    onChange={trackTitle}
                    value={title}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    onChange={trackNote}
                    value={note}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addNote();
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
