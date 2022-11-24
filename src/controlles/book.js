const { request, response } = require("express");
const Book =require('../models/book')

const getBooks =(req,res)=>{
    return Book.find({}).then(
        (data)=>{response.status(200).send(data)}
    ).catch(e=> response.status(500).send(e.message));
}
const createBook =(req,res)=>{
    return Book.create({...request.body}).then(
        (book)=>{response.status(200).send(book)}
    ).catch(e=> response.status(500).send(e.message));
}
const getBook =(req,res)=>{
    const { id } = req.params;
    return Book.findById(id).then(
        (book)=>{response.status(200).send(book)}
    ).catch(e=> response.status(500).send(e.message));
}
const updateBook =(req,res)=>{
    const { id } = req.params;
    return Book.findByIdAndUpdate(id,{...request.body}).then(
        (book)=>{response.status(200).send(book)}
    ).catch(e=> response.status(500).send(e.message));
}
const deleteBook =(req,res)=>{
    const { id } = req.params;
    return Book.findByIdAndDelete(id).then(
        (book)=>{response.status(200).send("Success")}
    ).catch(e=> response.status(500).send(e.message));
}
module.exports={
    getBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook,
}