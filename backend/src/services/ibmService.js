const { WatsonXAI } = require("@ibm-cloud/watsonx-ai");
const { IamAuthenticator } = require("ibm-cloud-sdk-core");

const { apiKey, projectId, region } = require("../config/ibmConfig");

const authenticator = new IamAuthenticator({
  apikey: apiKey,
});

const watsonxAI = WatsonXAI.newInstance({
  version: "2024-05-31",
  serviceUrl: `https://${region}.ml.cloud.ibm.com`,
  authenticator,
});


const generateWithLLM = async (prompt) => {
  try {

    const params = {
      // Currently using IBM watsonx provided model
      // Later we can replace this with Granite model ID
      modelId: "meta-llama/llama-3-3-70b-instruct",

      projectId,

      input: prompt,

      parameters: {
        max_new_tokens: 2000,
        temperature: 0.5,
        top_p: 0.9,
      },
    };


    console.log("\n==============================");
    console.log("INPUT SENT TO IBM WATSONX:");
    console.log(params.input);
    console.log("==============================\n");


    const response = await watsonxAI.generateText(params);


    console.log("\n==============================");
    console.log("FULL IBM RESPONSE:");
    console.log(JSON.stringify(response, null, 2));
    console.log("==============================\n");


    return response.result.results[0].generated_text;


  } catch (error) {

    console.error(
      "IBM watsonx Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

module.exports = {
  generateWithGranite: generateWithLLM,
};