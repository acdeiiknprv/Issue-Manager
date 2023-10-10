import { Button, Modal } from "@mui/material";
import { Issue } from "../../interfaces/issue";
import editIssue from "../../services/editIssues";
import { useState } from "react";
import IssueForm from "./IssueForm";

const IssueEditModal = ({ issue, refreshOnAction }: { issue: Issue, refreshOnAction: () => void }) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSave = async (updatedIssue: Issue) => {
        if (issue._id === undefined) return;
        setIsLoading(true);
        try {
            await editIssue(issue._id, updatedIssue);
            refreshOnAction();
        } catch (error) {
            console.error("Error while editing issue:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleShow}>
                Edit Issue
            </Button>

            <Modal open={show} onClose={handleClose}>
                <IssueForm
                    issue={issue}
                    onSubmit={onSave}
                    onClose={handleClose}
                    title="Edit Issue"
                    submitButtonText="Save Changes"
                    isLoading={isLoading}
                />
            </Modal>
        </>
    );
};
export default IssueEditModal;
