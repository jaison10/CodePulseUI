import { Category } from "src/app/models/category-model"

export interface Blog{
    id : String,
    title :String,
    shortDesc : String,
    content : string,
    featuredImgURL : String,
    urlHandle : String,
    publishedDate : Date,
    author :String,
    isVisible : Boolean,
    categories : Category[]
}