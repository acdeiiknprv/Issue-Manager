export function getIssues() {
    return fetch('https://issue-manager-api.vercel.app/issues')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export function getIssueById(issueId: string) {
    return fetch(`https://issue-manager-api.vercel.app/issues/${issueId}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}