//  Title: app.component.ts
//  Author: Grayton Savickas
//  Date: 11 July 2021
//  Description: App component

export interface IRepair {
    repairId: number;
    type: string;
    title: string;
    cost: number;
    // TODO: Add this as a time object
    repairTime: string;
    description: string;
    isInCart: false;
}
