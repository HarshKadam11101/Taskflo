import express from "express"
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()
const app = express();

