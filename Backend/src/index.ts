import express from "express"
import cors from "cors"


const app = express();


app.use(cors());
app.use(express.json());
app.use()


app.listen(3000,()=>{
  console.log("Server is listening on http://localhost:3000")
})

