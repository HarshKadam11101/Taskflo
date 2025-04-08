import express, { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import z from 'zod'
import { signup , signin} from "@harshkadam/zod-taskflo"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcryptjs'

const db = new PrismaClient();
require('dotenv').config()

const secret = process.env.JWT_SECRET;

export const Signup = async (req:Request,res:Response) => {

    const hashedPass = await bcrypt.hash(req.body.password,10);
    const {success} =  signup.safeParse(req.body)

    if(!success){
      return res.status(412).json({
        error: "validation error"
      })
    }

    const user = await db.user.findUnique({
      where:{
        email:req.body.email,
      }
    })

    if(user){
      return res.json({
        message:"user already exists"
      })
    }

    const creds = await db.user.create({
      data:{
        name:req.body.name,
        email:req.body.email,
        password:hashedPass
      }
    })

   
    if (!secret) {
        throw new Error("JWT_SECRET is not defined in the environment variables");
    }
    const token = jwt.sign(creds, secret);

    return res.status(200).json({
      jwt:token
    })
}

export const Signin = async(req:Request,res:Response) => {
  
    const {success} = signin.safeParse(req.body);

    if(!success){
      return res.status(411).json({
        message:"Validation error"
      })
    }


}