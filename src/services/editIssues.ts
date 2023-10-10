import { Issue } from "../interfaces/issue";

const editIssue = async (issueId: string, updatedIssue: Issue) => {
    try {
        const response = await fetch(`https://issue-manager-api.vercel.app/issues/${issueId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedIssue)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default editIssue;
