const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskStatus: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
}
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;