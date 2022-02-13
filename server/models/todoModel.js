import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    needTodo: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostToDo = mongoose.model('todos', postSchema);

export default PostToDo;