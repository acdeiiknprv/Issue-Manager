const deleteIssue = async (id: string) => {
    try {
        await fetch(`http://localhost:3000/issues/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error(error);
    }
};
export default deleteIssue;

