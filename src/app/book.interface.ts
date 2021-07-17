/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 27 June 2021
 * Description: App component
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
