import { Category } from "../../categorylist/models/category.model";

export interface CollectionsRequest {
    ItemId: string;
    ItemName: string;
    Description: String;
    ImagePath: string;
    Category: Category;
    Price: number;
    Quantity: number;
    PostedDate: Date;
}
