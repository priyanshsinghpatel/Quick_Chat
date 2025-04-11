import React, { useState } from "react";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

import axios from "axios";
function Gemini() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    async function generateAnswer() {
        console.log("loading");
        const response = await axios({
            url: apiKey,
            method: "post",
            data: {
                contents: [
                    {
                        parts: [{ text: question + " in 50 words" }],
                    },
                ],
            },
        });
        const res = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
        setAnswer(res);
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
            <div style={{ height: "100px", width: "450px", overflowY: "scroll" }}>
                <pre style={{ whiteSpace: "pre-wrap" }}>{answer}</pre>
            </div>
        </>
    );
}

export default Gemini;



