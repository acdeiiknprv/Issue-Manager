// useIssues.ts
import { useState, useEffect } from 'react';
import { getIssues } from '../services/getIssues';
import { Issue } from '../interfaces/issue';

export function useIssues() {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        async function fetchIssues() {
            const response = await getIssues();
            if (response)
                setIssues(response.reverse());
        }
        fetchIssues();
    }, [refresh]);

    function handleRefresh() {
        setRefresh(prev => !prev);
    }

    return { issues, handleRefresh };
}

export function useCreateModal() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    function handleShowModal() {
        setShowCreateModal(true);
    }
    function handleCloseModal() {
        setShowCreateModal(false);
    }
    return { showCreateModal, handleShowModal, handleCloseModal };
}
