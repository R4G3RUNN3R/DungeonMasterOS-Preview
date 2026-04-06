# Data Model Overview

DungeonMasterOS uses shared schema definitions to manage persistent multi-user campaign data.

## Main Entities

### Users
Stores account identity, authentication data, subscription tier, and usage tracking.

### Campaigns
Stores campaign-level settings such as:
- tone
- rules weight
- power level
- world type
- combat style
- homebrew rules
- custom world prompts
- persistent world state

### Characters
Stores player character information including:
- name
- race / class labels
- traits and backstory
- HP / level / status
- inventory
- progression data

### Messages
Stores campaign interaction history and allows narrative continuity between turns.

### Items and Effects
Tracks equipment, consumables, and active modifiers affecting characters or sessions.

## Design Goal

The schema is designed to support flexible game systems, not just a single fixed ruleset. This allows predefined settings, homebrew mechanics, and custom campaign structures.
