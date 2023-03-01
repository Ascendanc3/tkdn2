// import express
import express from "express";
// import controllers
import { getnNote, 
    getnNoteById, 
    savenNote,
    updatenNote,
    deletenNote } from "../controllers/nNoteController.js";
 
    // express router
const router = express.Router();
 
// Route get All nNotes
router.get('/', getnNote);
// Route get single nNote
router.get('/:id', getnNoteById);
// Route CREATE nNote
router.post('/', savenNote);
// Route UPDATE nNote
router.patch('/:id', updatenNote);
// Route DELETE nNote
router.delete('/:id', deletenNote);
 
// export router
export default router;