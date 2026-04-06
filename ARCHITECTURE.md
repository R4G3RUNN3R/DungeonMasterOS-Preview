# DungeonMasterOS Architecture Overview

DungeonMasterOS is structured as a full-stack TypeScript application with a React frontend, an Express backend, and shared data models.

## Core Structure

- `client/`  
  Frontend UI built with React and TypeScript.

- `server/`  
  Backend services including routing, authentication, storage handling, and the dungeon master engine.

- `shared/`  
  Shared schemas and models used across the application to keep frontend and backend logic aligned.

## Main Functional Areas

### Campaign Management
Supports persistent campaigns with configurable settings such as tone, rules weight, power level, world type, combat style, and homebrew rules.

### Character and World State
Tracks player characters, inventory, status, progression, and world state to allow persistent multi-user sessions.

### DM Engine
Processes narrative context, campaign settings, party data, and world state to generate structured responses while preserving player agency.

### Authentication and User Handling
Includes account handling, session/authentication flow, and usage-related subscription/tier logic.

## Technical Direction

- Frontend: React + TypeScript
- Backend: Express + TypeScript
- Database layer: SQLite + Drizzle ORM
- Shared models: Type-safe schemas used across the stack
