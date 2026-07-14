import jsPDF from "jspdf";

const safeText = (value, fallback = "Not available") => {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : fallback;
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
};

function exportBlueprintPdf(blueprint = {}) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const validation = blueprint.ideaValidation || {};
  const project = blueprint.projectAnalysis || {};
  const market = blueprint.marketAnalysis || {};
  const competitors = blueprint.competitorAnalysis || {};
  const budget = blueprint.budgetAnalysis || {};
  const funding = blueprint.fundingAnalysis || {};
  const investors = blueprint.investorAnalysis || {};
  const revenue = blueprint.revenueAnalysis || {};
  const goToMarket = blueprint.goToMarketAnalysis || {};
  const legal = blueprint.legalAnalysis || {};
  const government = blueprint.governmentSchemes || {};

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  let y = 20;
  let sectionNumber = 1;

  const checkPage = (requiredHeight = 20) => {
    if (y + requiredHeight > pageHeight - 18) {
      doc.addPage();
      y = 20;
    }
  };

  const addPageNumber = () => {
    const pageCount = doc.getNumberOfPages();

    for (let page = 1; page <= pageCount; page++) {
      doc.setPage(page);
      doc.setFontSize(9);
      doc.setTextColor(120, 120, 120);
      doc.text(
        `Page ${page} of ${pageCount}`,
        pageWidth / 2,
        pageHeight - 8,
        { align: "center" }
      );
    }
  };

  const addParagraph = (text, options = {}) => {
    const {
      fontSize = 10.5,
      indent = 0,
      spacingAfter = 4,
      textColor = [55, 65, 81],
    } = options;

    const value = safeText(text);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    doc.setTextColor(...textColor);

    const lines = doc.splitTextToSize(
      value,
      contentWidth - indent
    );

    checkPage(lines.length * 5 + spacingAfter);

    doc.text(lines, margin + indent, y);

    y += lines.length * 5 + spacingAfter;
  };

  const addLabelValue = (label, value) => {
    checkPage(15);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`${label}:`, margin, y);

    const labelWidth = doc.getTextWidth(`${label}: `);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(55, 65, 81);

    const lines = doc.splitTextToSize(
      safeText(value),
      contentWidth - labelWidth
    );

    doc.text(lines, margin + labelWidth, y);

    y += Math.max(6, lines.length * 5) + 2;
  };

  const addBulletList = (items, fallback = "Not available") => {
    const list = Array.isArray(items) ? items : [];

    if (!list.length) {
      addParagraph(fallback);
      return;
    }

    list.forEach((item) => {
      const lines = doc.splitTextToSize(
        safeText(item),
        contentWidth - 8
      );

      checkPage(lines.length * 5 + 3);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10.5);
      doc.setTextColor(55, 65, 81);

      doc.text("•", margin + 2, y);
      doc.text(lines, margin + 8, y);

      y += lines.length * 5 + 2;
    });

    y += 2;
  };

  const addSubheading = (title) => {
    checkPage(12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(8, 145, 178);
    doc.text(title, margin, y);

    y += 7;
  };

  const addSection = (title, renderContent) => {
    checkPage(22);

    doc.setDrawColor(8, 145, 178);
    doc.setLineWidth(0.7);
    doc.line(margin, y, pageWidth - margin, y);

    y += 8;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(15, 23, 42);
    doc.text(`${sectionNumber}. ${title}`, margin, y);

    sectionNumber += 1;
    y += 9;

    renderContent();

    y += 5;
  };

  // Cover
  doc.setFillColor(6, 182, 212);
  doc.rect(0, 0, pageWidth, 8, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(25);
  doc.setTextColor(15, 23, 42);
  doc.text("VENTORA", margin, 28);

  doc.setFontSize(11);
  doc.setTextColor(8, 145, 178);
  doc.text("AI STARTUP BLUEPRINT", margin, 37);

  y = 54;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42);

  const ideaName =
    validation.ideaName ||
    blueprint.startupName ||
    "Startup Blueprint";

  const titleLines = doc.splitTextToSize(
    ideaName,
    contentWidth
  );

  doc.text(titleLines, margin, y);
  y += titleLines.length * 9 + 5;

  addParagraph(
    blueprint.overview ||
      "AI-generated startup roadmap and business analysis.",
    {
      fontSize: 11.5,
      spacingAfter: 8,
    }
  );

  doc.setFillColor(240, 253, 250);
  doc.setDrawColor(103, 232, 249);
  doc.roundedRect(
    margin,
    y,
    contentWidth,
    27,
    3,
    3,
    "FD"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(8, 145, 178);
  doc.text("STARTUP SCORE", margin + 7, y + 9);

  doc.setFontSize(17);
  doc.setTextColor(15, 23, 42);
  doc.text(
    safeText(validation.startupPotentialScore, "N/A"),
    margin + 7,
    y + 20
  );

  y += 36;

  addLabelValue(
    "Category",
    validation.ideaCategory
  );

  addLabelValue("Vision", blueprint.vision);
  addLabelValue("Future Scope", blueprint.future);

  y += 6;

  addSection("Executive Summary", () => {
    addParagraph(blueprint.overview);
    addSubheading("Problem");
    addParagraph(blueprint.problem);
    addSubheading("Proposed Solution");
    addParagraph(blueprint.solution);
  });

  addSection("Idea Validation", () => {
    addSubheading("Problem Validation");
    addParagraph(validation.problemValidation);

    addSubheading("Market Validation");
    addParagraph(validation.marketValidation);

    addSubheading("Technical Feasibility");
    addParagraph(validation.technicalFeasibility);
  });

  addSection("Project vs Startup Decision", () => {
    addLabelValue(
      "Classification",
      project.isProjectOnly
    );

    addSubheading("How to convert it into a startup");
    addParagraph(project.howToConvertIntoStartup);
  });

  addSection("Market Analysis", () => {
    addLabelValue("Industry", market.industry);
    addLabelValue("Target Audience", market.audience);
    addLabelValue("Market Size", market.marketSize);
    addLabelValue("Growth", market.growth);
    addLabelValue("Market Demand", market.demand);

    addSubheading("Current Industry Trends");
    addBulletList(market.trends);
  });

  addSection("Competitor Analysis", () => {
    addSubheading("Existing Competitors");
    addBulletList(
      competitors.existingCompetitors ||
        competitors.competitors
    );

    addSubheading("Strengths");
    addBulletList(competitors.strengths);

    addSubheading("Weaknesses");
    addBulletList(competitors.weaknesses);

    addSubheading("Market Gaps");
    addBulletList(competitors.marketGaps);

    addSubheading("Competitive Advantage");
    addParagraph(competitors.competitiveAdvantage);
  });

  addSection("Budget Roadmap", () => {
    addLabelValue(
      "Development Cost",
      budget.developmentCost
    );

    addLabelValue(
      "Infrastructure Cost",
      budget.infrastructureCost
    );

    addLabelValue(
      "Marketing Budget",
      budget.marketingBudget
    );

    addLabelValue(
      "Operational Cost",
      budget.operationalCost
    );
  });

  addSection("Funding Roadmap", () => {
    addSubheading("Bootstrapping");
    addParagraph(funding.bootstrapping);

    addSubheading("Angel Investors");
    addBulletList(funding.angelInvestors);

    addSubheading("Venture Capital");
    addBulletList(funding.ventureCapital);

    addSubheading("Grants");
    addBulletList(funding.grants);

    addSubheading("Accelerators");
    addBulletList(funding.accelerators);

    addSubheading("Incubators");
    addBulletList(funding.incubators);
  });

  addSection("Investor Recommendations", () => {
    addSubheading("Recommended Investors");
    addBulletList(
      investors.recommendedInvestors ||
        investors.investors
    );

    addSubheading("Incubators and Networks");
    addBulletList(
      investors.incubators ||
        investors.supportNetworks
    );

    addSubheading("Investor Strategy");
    addParagraph(
      investors.strategy ||
        investors.recommendation
    );
  });

  addSection("Revenue Model", () => {
    addSubheading("Revenue Streams");
    addParagraph(
      revenue.revenueModel ||
        blueprint.revenue ||
        revenue.model
    );

    addLabelValue(
      "Forecast",
      revenue.forecast
    );

    addLabelValue(
      "Expected ROI",
      revenue.expectedROI
    );
  });

  addSection("Go-To-Market Roadmap", () => {
    addSubheading("Strategy");
    addParagraph(
      goToMarket.strategy ||
        blueprint.goToMarket
    );

    addSubheading("Customer Acquisition");
    addParagraph(goToMarket.customerAcquisition);

    addSubheading("Growth Channels");
    addParagraph(goToMarket.growthChannels);

    addSubheading("Expansion Plan");
    addParagraph(goToMarket.expansion);
  });

  addSection("Legal Requirements", () => {
    addLabelValue(
      "Business Registration",
      legal.businessRegistration
    );

    addSubheading("Data Privacy");
    addParagraph(legal.dataPrivacy);

    addSubheading("Licenses");
    addBulletList(legal.licenses);

    addSubheading("Compliance");
    addBulletList(legal.compliance);

    addSubheading("Intellectual Property");
    addParagraph(legal.intellectualProperty);
  });

  addSection("Government Schemes", () => {
    addSubheading("Startup India");
    addParagraph(government.startupIndia);

    addSubheading("MSME Support");
    addParagraph(government.msme);

    addSubheading("Grants");
    addBulletList(government.grants);

    addSubheading("Subsidies");
    addBulletList(government.subsidies);
  });

  addSection("Recommended Action Roadmap", () => {
    addSubheading("Phase 1 - Validate");
    addParagraph(
      "Interview target users, validate the core problem, identify the most important feature and prepare a clickable or functional MVP."
    );

    addSubheading("Phase 2 - Build MVP");
    addParagraph(
      "Develop the minimum viable product, test it with early users and improve the product using real feedback."
    );

    addSubheading("Phase 3 - Launch");
    addParagraph(
      "Launch through the recommended go-to-market channels, establish partnerships and track user acquisition and retention."
    );

    addSubheading("Phase 4 - Scale");
    addParagraph(
      "Improve automation, expand the customer base, apply for relevant funding and government schemes and strengthen compliance."
    );
  });

  addPageNumber();

  const fileName = ideaName
    .replace(/[^a-z0-9]/gi, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

  doc.save(`${fileName || "startup"}-blueprint.pdf`);
}

export default exportBlueprintPdf;