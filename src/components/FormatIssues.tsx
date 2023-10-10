import React, { useState } from 'react';
import IssuesActions from './IssuesHandle/IssuesActions';
import IssueCreateModal from './IssuesHandle/IssueCreateModal';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useIssues, useCreateModal } from './IssueHandler';
import { Issue } from '../interfaces/issue';
import { sortByCreationDate, sortByName } from '../utils/sort';
import { getStatus } from '../utils/status';
import { Box, Typography } from '@mui/material';

function FormatIssues() {
    const { issues, handleRefresh } = useIssues();
    const { showCreateModal, handleShowModal, handleCloseModal } = useCreateModal();
    const [sortType, setSortType] = useState<'CreationDate' | 'name'>('CreationDate');
    const [searchTerm, setSearchTerm] = useState<string>("");

    let sortedIssues: Issue[] = [];

    const filteredIssues = searchTerm
        ? issues.filter(issue => issue.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : issues;

    sortedIssues = [...filteredIssues].sort(
        sortType === 'CreationDate' ? sortByCreationDate : sortByName
    );

    return (
        <div>
            <button onClick={() => setSortType('CreationDate')}>Sort by Creation Date</button>
            <button onClick={() => setSortType('name')}>Sort by Name</button>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <AddButton onClick={handleShowModal} />
            {sortedIssues.length === 0 ? <NoIssues /> :
                sortedIssues.map(issue => (
                    <IssueDisplay key={issue._id} issue={issue} onAction={handleRefresh} />
                ))}
            {showCreateModal ? <IssueCreateModal open={showCreateModal} onClose={handleCloseModal} refreshOnAction={handleRefresh} /> : null}
        </div>
    );
}

function AddButton({ onClick }: { onClick: () => void }) {
    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <Button variant="contained" color="primary"
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    minWidth: 'unset',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={onClick}
            >
                <AddIcon />
            </Button>
        </div>
    );
}

function NoIssues() {
    return <h3>No issues</h3>;
}

function IssueDisplay({ issue, onAction }: { issue: Issue, onAction: () => void }) {
    const [status, color] = getStatus(issue.dueDate);
    const date = new Date(issue.dueDate).toString();

    return (
        <Box className='issue-container' sx={{ marginBottom: 2, padding: 2, border: '1px solid lightgray', borderRadius: 2 }}>
            <Typography variant="h6" component="div">{issue.name}</Typography>
            <Typography variant="subtitle1" component="div">{issue.description}</Typography>
            <Typography variant="subtitle2" component="div">{date}</Typography>
            <Typography variant="body2" component="div" sx={{ color }}>{status}</Typography>
            <IssuesActions issue={issue} onAction={onAction} />
        </Box>
    );
}

export default FormatIssues;
