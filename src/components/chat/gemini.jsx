import React, { useState } from "react";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;



import useStore from './store'



import axios from "axios";
function Gemini() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");


    const setMessage = useStore((state) => state.setMessage)



    async function generateAnswer() {
        console.log("loading");
        const response = await axios({
            url: apiKey,
            method: "post",
            data: {
                contents: [
                    {
                        parts: [{ text: "write a message "+question + "  in 50 words and do not write about you give me only in 50 words, i use you in chat application so write content in message way" }],
                    },
                ],
            },
        });
        const res = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
        // setAnswer(res);
        setMessage(res)
        console.log(res)
    }

    return (
        <>
            <textarea
                placeholder="Enter your prompt"
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ height: "100px", width: "500px", fontSize: "1.2rem" }}
            ></textarea>
            <button onClick={generateAnswer}>Submit</button>

            {/*<div style={{ height: "100px", width: "450px", overflowY: "scroll" }}>
                <pre style={{ whiteSpace: "pre-wrap" }}>{answer}</pre>
            </div> */}
        </>
    );
}

export default Gemini;



