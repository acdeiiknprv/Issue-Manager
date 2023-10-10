const deleteIssue = async (id: string) => {
    try {
        await fetch(`https://issue-manager-api.vercel.app/issues/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error(error);
    }
};
export default deleteIssue;

