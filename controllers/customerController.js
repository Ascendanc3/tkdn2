// import models
import Note from "../models/Note.js";

// function get All Notes
export const getNote = async (req, res) => {
    try {
        const note = await Note.find();
        res.json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
// function get single Note
export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.json(note);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
// function Create Note
export const saveNote = async (req, res) => {
    const note = new Note(req.body);
    try {
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
// function Update Note
export const updateNote = async (req, res) => {
    const cekId = await Note.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedNote = await Note.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
// function Delete Note
export const deleteNote = async (req, res) => {
    const cekId = await Note.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedNote = await Note.deleteOne({_id: req.params.id});
        res.status(200).json(deletedNote);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}