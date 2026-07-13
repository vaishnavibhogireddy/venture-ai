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
      modelId: "meta-llama/llama-3-3-70b-instruct",

      projectId,

      input: prompt,

      parameters: {
        decoding_method: "greedy",
        max_new_tokens: 900,
        min_new_tokens: 200,
        temperature: 0.2,
        repetition_penalty: 1.05
      }
    };

    console.log("\n==============================");
    console.log("Prompt Length:", prompt.length);
    console.log("==============================");

    const response = await watsonxAI.generateText(params);

    const generated =
      response.result.results?.[0]?.generated_text || "";

    console.log("\n==============================");
    console.log("Response Length:", generated.length);
    console.log("==============================");

    return generated;

  } catch (error) {

    console.error(
      "IBM Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

module.exports = {
  generateWithGranite: generateWithLLM,
};