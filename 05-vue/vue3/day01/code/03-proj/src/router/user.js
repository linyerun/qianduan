import express from "express";
import {getAllUsers} from "../controller/user.js";

const router = new express.Router()

router.get('/users',getAllUsers)

export default router