/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 18 July 2021
 * Description: Bob's Repair Shop
 */

export interface RepairItem {
    repairId: number;
    type: string;
    title: string;
    cost: number;
    // TODO: Add this as a time object
    repairTime: string;
}
