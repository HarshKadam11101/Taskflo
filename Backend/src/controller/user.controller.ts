import express from "express"
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const db = new PrismaClient();

export const register = async (req:Request,res:Response)=>{
    const credentials = await db.user.create({
      
    })
}
