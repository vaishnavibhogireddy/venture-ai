
const fs = require("fs");
const path = require("path");

const knowledgeFiles = [
  "startup_india.json",
  "government_schemes.json",
  "funding.json",
  "legal.json",
  "incubators.json",
  "market.json",
];

const loadKnowledge = () => {
  let data = [];

  knowledgeFiles.forEach((file) => {
    const filePath = path.join(__dirname, "../../knowledge", file);

    if (fs.existsSync(filePath)) {
      const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
      data.push(...json);
    }
  });

  return data;
};

const retrieveKnowledge = (idea) => {

  const knowledge = loadKnowledge();

  const keywords = idea
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 2);

  const relevant = knowledge.filter(item => {

    const searchable = (
      item.title +
      " " +
      item.description +
      " " +
      item.keywords.join(" ")
    ).toLowerCase();

    return keywords.some(keyword => searchable.includes(keyword));

  });

  return relevant;

};

module.exports = {
  retrieveKnowledge,
};