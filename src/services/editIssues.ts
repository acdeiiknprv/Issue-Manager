import { Issue } from "../interfaces/issue";

const editIssue = async (issueId: string, updatedIssue: Issue) => {
    try {
        const response = await fetch(`http://localhost:3000/issue/${issueId}`, {
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
