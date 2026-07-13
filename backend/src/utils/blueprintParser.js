function parseBlueprint(text) {
  try {
    // Remove markdown fences
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let braceCount = 0;
    let start = -1;
    let end = -1;

    for (let i = 0; i < cleaned.length; i++) {
      const char = cleaned[i];

      if (char === "{") {
        if (start === -1) start = i;
        braceCount++;
      }

      if (char === "}") {
        braceCount--;

        if (braceCount === 0) {
          end = i;
          break; // Stop at the FIRST complete JSON object
        }
      }
    }

    if (start === -1 || end === -1) {
      throw new Error("No complete JSON found.");
    }

    const jsonText = cleaned.substring(start, end + 1);

    const data = JSON.parse(jsonText);

    return {
      ideaValidation: data.ideaValidation || {},
      projectAnalysis: data.projectAnalysis || {},

      overview: data.overview || "",
      vision: data.vision || "",

      problem: data.problem || "",
      solution: data.solution || "",

      customers: data.customers || "",
      market: data.market || "",

      businessModel: data.businessModel || "",

      revenue: data.revenue || "",

      goToMarket: data.goToMarket || "",

      budget: data.budget || "",

      funding: data.funding || "",

      government: data.government || "",

      future: data.future || "",

      competitors: data.competitors || "",

      legal: data.legal || "",
    };
  } catch (error) {
    console.log("Blueprint Parser Error:", error.message);

    return {
      ideaValidation: {},
      projectAnalysis: {},
      overview: "",
      vision: "",
      problem: "",
      solution: "",
      customers: "",
      market: "",
      businessModel: "",
      revenue: "",
      goToMarket: "",
      budget: "",
      funding: "",
      government: "",
      future: "",
      competitors: "",
      legal: "",
    };
  }
}

module.exports = parseBlueprint;