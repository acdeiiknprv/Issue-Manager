import { Modal } from "@mui/material";
import IssueForm from "./IssueForm";
import createIssue from "../../services/createIssues";
import { Issue } from "../../interfaces/issue";
import { useState } from "react";

const IssueCreateModal = ({ open, onClose, refreshOnAction }: { open: boolean, onClose: () => void, refreshOnAction: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);

    const onSave = async (newIssue: Issue) => {
        setIsLoading(true);
        try {
            await createIssue(newIssue);
            refreshOnAction();
        } catch (error) {
            console.error("Error while creating issue:", error);
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <IssueForm
                onSubmit={onSave}
                onClose={onClose}
                title="Create Issue"
                submitButtonText="Create Issue"
                isLoading={isLoading}
            />
        </Modal>
    );
};
export default IssueCreateModal;