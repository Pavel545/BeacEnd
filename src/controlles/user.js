const { request, response } = require("express");
const { PORT, API_URL } = process.env;
const User=require('../models/user')

const getUsers =(req,res)=>{
    return User.find({}).then(
        (data)=>{response.status(200).send(data)}
    ).catch(e=> response.status(500).send(e.message));
}
const createUser =(req,res)=>{
    return User.create({...request.body}).then(
        (user)=>{response.status(200).send(user)}
    ).catch(e=> response.status(500).send(e.message));
}
const getUser =(req,res)=>{
    const { id } = req.params;
    return User.findById(id).then(
        (user)=>{response.status(200).send(user)}
    ).catch(e=> response.status(500).send(e.message));
}
const updateUser =(req,res)=>{
    const { id } = req.params;
    return User.findByIdAndUpdate(id,{...request.body}).then(
        (user)=>{response.status(200).send(user)}
    ).catch(e=> response.status(500).send(e.message));
}
const deleteUser =(req,res)=>{
    const { id } = req.params;
    return User.findByIdAndDelete(id).then(
        (user)=>{response.status(200).send("Success")}
    ).catch(e=> response.status(500).send(e.message));
}
module.exports={
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
}