import { Post, User } from "./models";
import { connectDB } from "./utils";

export const getPosts =async (params) => {
    try {
        connectDB()
        const posts =await Post.find();
        return posts
    } catch (error) {
        throw new Error(error);
        console.log(error);
    }
}
export const getUser=async (id) => {
    try {
        connectDB()
        const user =await User.findById(id);
        return user
    } catch (error) {
        throw new Error(error);
        console.log(error);
        
    }
}
export const getPost=async (slug) => {
    try {
        connectDB()
        const post =await Post.find({slug:slug});
        return post
    } catch (error) {
        throw new Error(error);
        console.log(error);
        
    }
}
export const getallUser=async () => {
    try {
        connectDB()
        const users =await User.find();
        return users
    } catch (error) {
        throw new Error(error);
        console.log(error);
    }
}