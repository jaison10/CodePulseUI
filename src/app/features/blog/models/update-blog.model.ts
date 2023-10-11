import { Category } from "src/app/models/category-model"
export interface UpdateBlog{
    title :String,
    shortDesc : String,
    content : String,
    featuredImgURL : String,
    urlHandle : String,
    author :String,
    isVisible : Boolean,
    categoryIDs : String[]
}
