import { Issue } from "../interfaces/issue";

export function sortByCreationDate(a: Issue, b: Issue): number {
    if (!a.createDate || !b.createDate) return 0;
    const dateA = new Date(a.createDate);
    const dateB = new Date(b.createDate);

    if (dateA > dateB) return 1;
    if (dateA < dateB) return -1;
    return 0;
}

export function sortByName(a: Issue, b: Issue): number {
    return a.name.localeCompare(b.name);
}