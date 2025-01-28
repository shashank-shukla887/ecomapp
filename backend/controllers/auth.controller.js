import { connection } from "../lib/db";
export const signup=async(req,res)=>{
    const {email,password,name}=req.body;
    try{
        const [userExists] =await connection.query('SELECT * FROM users WHERE email=?',[email]);
        
        if(userExists.length>0){
            return res.status(400).json({message:'User already exists with this email. '});
        }
 
        const [result]=await connection.query(
            'INSERT INTO users (name,email,password) VALUES (?,?,?)',[name,email,password]
        )

        res.status(201).json({
            message:'User registered successfully!',
            userId:result.insertId
        })

    }catch(error){
        console.error('Error during signup:',error);
        res.status(200).json({message:'Internal Server Error'})
    }
    res.send("Sign up route called");
}

export const login=async(req,res)=>{
    res.send("login route called");
}

export const logout=async(req,res)=>{
    res.send("logout route called");
}
