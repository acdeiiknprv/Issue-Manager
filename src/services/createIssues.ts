import { Issue } from "../interfaces/issue";

const createIssue = async (newIssue: Issue) => {
    newIssue.createDate = new Date();
    try {
        const response = await fetch(`http://localhost:3000/issues`, {
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
