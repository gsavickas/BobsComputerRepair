export interface IRepair {
    repairId: number;
    type: string;
    title: string;
    cost: number;
    // TODO: Add this as a time object
    repairTime: string;
    description: string;
}
