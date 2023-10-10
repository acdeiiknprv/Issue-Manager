export interface Issue {
    _id?: string;
    name: string;
    description: string;
    dueDate: Date;
    createDate?: Date;
    status?: "Due" | "Due soon" | "Overdue";
}
