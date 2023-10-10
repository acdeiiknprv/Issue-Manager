import { Issue } from "../interfaces/issue";

const createIssue = async (newIssue: Issue) => {
    newIssue.createDate = new Date();
    try {
        const response = await fetch(`https://issue-manager-api.vercel.app/issues`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newIssue)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default createIssue;
