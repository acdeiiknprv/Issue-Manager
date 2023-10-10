export function getIssues() {
    return fetch('http://localhost:3000/issues')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export function getIssueById(issueId: string) {
    return fetch(`http://localhost:3000/issues/${issueId}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}