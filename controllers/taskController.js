const Task = require('../models/taskModel');

const handleGetTasksList = async (req,res)=>{
    const {taskStatus} = req.query;
    let queries = {};
    if(taskStatus){
        queries = {taskStatus};
    }
    const tasks = await Task.find(queries);
    res.json(tasks);
}

const handleUpdateTaskById = async (req,res) => {
    const body = req.body;

    const {task_name, task_status} = body || {};

    if( !body || !task_name || !task_status ){
        return res.status(400).json({message:'All fields are required'});
    }

    const result = await Task.findByIdAndUpdate(req.params.id, {taskName:task_name, taskStatus: task_status});
    return res.status(200).json({msg: 'success'});
}

const handleCreateNewTask = async (req, res)=>{
    const body = req.body;
    
    const {task_name, task_status} = body || {};

    if( !body || !task_name || !task_status ){
        return res.status(400).json({message:'All fields are required'});
    }

    const result = await Task.create({
        taskName: task_name ,
        taskStatus: task_status ,
    })

    return (
        res.status(201).json({message:'success', id:result._id})
    )
}

module.exports = {
    handleGetTasksList,
    handleCreateNewTask,
    handleUpdateTaskById
}