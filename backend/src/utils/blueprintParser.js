function parseBlueprint(text) {
  try {
    // Remove markdown if the model accidentally returns it
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // Find the first complete JSON object
    let depth = 0;
    let start = -1;
    let end = -1;

    for (let i = 0; i < cleaned.length; i++) {
      if (cleaned[i] === "{") {
        if (start === -1) start = i;
        depth++;
      }

      if (cleaned[i] === "}") {
        depth--;

        if (depth === 0) {
          end = i;
          break;
        }
      }
    }

    if (start === -1 || end === -1) {
      throw new Error("No valid JSON found.");
    }

    const json = cleaned.substring(start, end + 1);

    const data = JSON.parse(json);

    return {
      ideaValidation: data.ideaValidation || {},

      projectAnalysis: data.projectAnalysis || {},

      overview: data.overview || "",

      vision: data.vision || "",

      problem: data.problem || "",

      solution: data.solution || "",

      businessModel: data.businessModel || "",

      revenue: data.revenue || "",

      goToMarket: data.goToMarket || "",

      future: data.future || ""
    };

  } catch (err) {

    console.log("Blueprint Parser Error:", err.message);

    return {

      ideaValidation: {},

      projectAnalysis: {},

      overview: "",

      vision: "",

      problem: "",

      solution: "",

      businessModel: "",

      revenue: "",

      goToMarket: "",

      future: ""

    };

  }
}

module.exports = parseBlueprint;