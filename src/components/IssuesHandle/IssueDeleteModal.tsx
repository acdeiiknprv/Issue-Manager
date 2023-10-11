import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import deleteIssue from '../../services/deleteIssues';

const IssueDeleteModal = ({ issueId, refreshOnAction }: { issueId: string, refreshOnAction: () => void }) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            await deleteIssue(issueId);
            refreshOnAction();
        } catch (error) {
            console.error("Error while editing issue:", error);
        } finally {
            setIsLoading(false);
            handleClose();
        }

    };

    return (
        <>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Delete Issue
            </Button>
            <Modal open={open} onClose={handleClose}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '400px', margin: 'auto', marginTop: '50px' }}>
                    <h2>Are you sure you want to delete this issue?</h2>
                    <p>This action cannot be undone.</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="contained" color="secondary" onClick={handleDelete} disabled={isLoading}>
                            {isLoading ? 'Saving...' : 'Yes, Delete'}
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default IssueDeleteModal;
