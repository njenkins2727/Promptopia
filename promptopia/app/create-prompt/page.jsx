'use client';
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });
    
    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true); //when form is active set submitting true, using as a loader

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({ //passing data through our front end to our api/prompt/new
                    prompt: post.prompt, // the value of prompt that can be updated with setPost
                    userId: session?.user.id, // '?' checks for the session 
                    tag: post.tag // the value of tag that can be updated with setPost
                })
            })

            if(response.ok){
                router.push('/'); // '/' directs back to homepage after handlesubmit is complete 
            }
        } catch (error) {
            console.log(error);
        }finally {
            setSubmitting(false); //when form is finished set false
        }
    }

  return (
    <Form //passing props to the Form component
    type="Create"  
    post={post} 
    setPost={setPost}
    submitting={submitting} 
    handleSubmit={createPrompt} 
    />
  )
}

export default CreatePrompt