import { Category } from "../../categorylist/models/category.model";

export interface Collections{
  ItemId: string;
  ItemName: string;
  Description: String;
  ImagePath: string;
  Category: Category;
  Price: number;
  Quantity: number;
  PostedDate: Date;
  IsVisible: boolean;
}
