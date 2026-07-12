const { generateAIResponse } = require("../services/ibmService");

const parseBlueprint = require("../utils/blueprintParser");
const chatController = async (req, res) => {

    try {

        const { message } = req.body;

const response = await generateAIResponse(message);

const parsed = parseBlueprint(response);


        res.json({
            success: true,
            userMessage: message,
            blueprint: parsed,
        });


    } catch(error) {

    console.log("Controller Error:", error);

    res.status(500).json({
        success:false,
        message:"AI response failed",
        error: error.message
    });

}

};


module.exports = chatController;