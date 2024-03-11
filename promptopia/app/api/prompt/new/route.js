import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDB(); //lambda function means it will die when it does its job so do it every time 
        const newPrompt = new Prompt({ 
            creator: userId, 
            prompt,
            tag //
    })

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error){
       return new Response('Failed to create new promopt', { status: 500 })
    }
}

//2:13:58