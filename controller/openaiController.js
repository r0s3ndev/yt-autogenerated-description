const openAi = require("../config/openaiConfig")

const generateDesc = async (title) => {
    const desc = await openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ 
            role: "user", 
            content: `Come up with a description for a Youtube video called ${title}`
        }],
        max_completion_tokens: 100
    });

    console.log(desc.choices[0].message);
}

module.exports = { generateDesc };