import { useState } from "react";
import { Issue } from "../../interfaces/issue";
import { Button, TextField } from "@mui/material";
import React from "react";

interface IssueFormProps {
    issue?: Issue;
    onSubmit: (issue: Issue) => Promise<void>;
    onClose: () => void;
    title: string;
    submitButtonText: string;
    isLoading?: boolean;
}

const IssueForm = React.forwardRef<HTMLDivElement, IssueFormProps>(({ issue, onSubmit, onClose, title, submitButtonText, isLoading }, ref) => {
    const [name, setName] = useState(issue ? issue.name : "");
    const [description, setDescription] = useState(issue ? issue.description : "");
    const [dueDate, setDueDate] = useState(issue ? new Date(issue.dueDate) : new Date());

    const isFormValid = () => {
        return name.trim() !== "" && description.trim() !== "" && dueDate instanceof Date;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isFormValid()) {
            return;
        }
        await onSubmit({ name, description, dueDate });
        onClose();
    };

    return (
        <div
            ref={ref}
            tabIndex={-1}
            style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '400px', margin: 'auto', marginTop: '50px' }}
        >
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    required
                    label="Description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <TextField
                    required
                    label="Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={dueDate instanceof Date ? dueDate.toISOString().split('T')[0] : ''}
                    onChange={(event) => setDueDate(new Date(event.target.value))}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isLoading}  // <-- disable the button if loading
                    >
                        {isLoading ? 'Saving...' : submitButtonText}
                    </Button>
                    <Button variant="contained" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}
);
export default IssueForm;
