import { Modal } from "@mui/material";
import IssueForm from "./IssueForm";
import createIssue from "../../services/createIssues";
import { Issue } from "../../interfaces/issue";

const IssueCreateModal = ({ open, onClose, refreshOnAction }: { open: boolean, onClose: () => void, refreshOnAction: () => void }) => {
    const onSave = async (newIssue: Issue) => {
        await createIssue(newIssue);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <IssueForm
                onSubmit={onSave}
                onClose={onClose}
                title="Create Issue"
                submitButtonText="Create Issue"
            />
        </Modal>
    );
};
export default IssueCreateModal;