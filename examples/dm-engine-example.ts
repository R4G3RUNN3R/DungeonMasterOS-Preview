type CampaignConfig = {
  tone: string;
  rulesWeight: string;
  powerLevel: string;
  worldType: string;
  homebrewRules?: string;
};

export function buildPrompt(config: CampaignConfig, partySummary: string) {
  return `
You are the Dungeon Master for this campaign.

Tone: ${config.tone}
Rules Weight: ${config.rulesWeight}
Power Level: ${config.powerLevel}
World Type: ${config.worldType}

Homebrew Rules:
${config.homebrewRules || "None"}

Party:
${partySummary}
  `.trim();
}
