import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const campaigns = sqliteTable("campaigns", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  tone: text("tone").notNull().default("heroic"),
  rulesWeight: text("rules_weight").notNull().default("medium"),
  powerLevel: text("power_level").notNull().default("standard"),
  worldType: text("world_type").notNull().default("original"),
  homebrewRules: text("homebrew_rules").notNull().default(""),
  worldState: text("world_state").notNull().default("{}"),
});
