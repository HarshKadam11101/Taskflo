import jwt from "jsonwebtoken"
import z from 'zod'
import express, { Request, Response, NextFunction } from "express"
import {signup} from '@harshkadam/zod-taskflo'
import { PrismaClient } from "@prisma/client"

require('dotenv').config
const secret = process.env.JWT_SECRET

const db = new PrismaClient();
const app = express();


const authMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const token = req.headers['authorization'];
    
    if (!token || !secret) {
        throw new Error("JWT_SECRET or Token is not defined.");
      }
    const creds =  jwt.verify(token,secret);


    
}
