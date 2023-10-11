import { Category } from "src/app/models/category-model"
export interface CreateBlog{
    title :String,
    shortDesc : String,
    content : String,
    featuredImgURL : String,
    publishedDate : Date,
    urlHandle : String,
    author :String,
    isVisible : Boolean
    // Categories : Category[]
}
