export enum Priority {
    HIGH,
    MEDIUM,
    LOW,
};

export interface Item {
    id: number;
    done: boolean;
    description: string;
    priority: Priority;
}