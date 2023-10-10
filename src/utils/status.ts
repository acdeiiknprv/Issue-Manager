export function getStatus(dueDate: Date): [string, string] {
    const now = new Date().getTime();
    const issueDueDate = new Date(dueDate).getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const difference = (issueDueDate - now) / oneDay;

    if (difference < 0) {
        return ["Overdue", "red"];
    } else if (difference <= 7) {
        return ["Due soon", "orange"];
    } else {
        return ["Not urgent", "green"];
    }
}
