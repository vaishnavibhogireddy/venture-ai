require("dotenv").config();

console.log("API KEY exists:", !!process.env.IBM_API_KEY);
console.log("PROJECT ID:", process.env.IBM_PROJECT_ID);
console.log("REGION:", process.env.IBM_REGION);

module.exports = {
  apiKey: process.env.IBM_API_KEY,
  projectId: process.env.IBM_PROJECT_ID,
  region: process.env.IBM_REGION,
};