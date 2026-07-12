require("dotenv").config();

console.log("API Key:", process.env.IBM_API_KEY ? "Loaded ✅" : "Missing ❌");
console.log("Project ID:", process.env.IBM_PROJECT_ID ? "Loaded ✅" : "Missing ❌");
console.log("Region:", process.env.IBM_REGION);