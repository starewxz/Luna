import React, { useState } from "react";
import { faTrash, faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Note({ id, title, content, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editContent, setEditContent] = useState(content);

    // Save changes and exit editing mode
    function handleSave() {
        onEdit(id, { title: editTitle, content: editContent });
        setIsEditing(false);
    }

    return (
        <div className="note">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        autoFocus
                    />
                    <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows="5"
                    />
                </>
            ) : (
                <>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </>
            )}

            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                {isEditing ? (
                    <FontAwesomeIcon
                        className="icon-save"
                        icon={faCheck}
                        title="Save note"
                        onClick={handleSave}
                    />
                ) : (
                    <FontAwesomeIcon
                        className="icon-edit"
                        icon={faPenToSquare}
                        title="Edit note"
                        onClick={() => setIsEditing(true)}
                    />
                )}
                <FontAwesomeIcon
                    className="icon-delete"
                    icon={faTrash}
                    title="Delete note"
                    onClick={() => onDelete(id)}
                />
            </div>
        </div>
    );
}

export default Note;
