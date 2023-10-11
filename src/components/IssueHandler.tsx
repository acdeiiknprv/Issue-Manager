// useIssues.ts
import { useState, useEffect } from 'react';
import { getIssues } from '../services/getIssues';
import { Issue } from '../interfaces/issue';

export function useIssues() {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchIssues() {
            setLoading(true);
            const response = await getIssues();
            if (response)
                setIssues(response.reverse());
            setLoading(false);
        }
        fetchIssues();
    }, [refresh]);

    function handleRefresh() {
        setRefresh(prev => !prev);
    }

    return { issues, handleRefresh, loading };
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
