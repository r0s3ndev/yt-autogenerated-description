const OpenAI = require('openai');
//add .env with api-key
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    organization: "id-org",
    project: "id-prj"
});

module.exports = openai