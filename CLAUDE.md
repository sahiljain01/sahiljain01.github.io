# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About the Owner

Sahil Jain - currently on the Tesla AI team working on world models for Tesla Optimus. Previously a quantitative developer at Citadel in Fixed Income & Macro (systematic trading), with additional experience at Citadel Securities (HPC), Nuro (ML/AI Infra), and Salesforce (developer experience tooling). Princeton University alum, based in the Bay Area.

## Project Overview

This is a personal portfolio website (sahiljain01.github.io) hosted on GitHub Pages. It's a simple static site built with vanilla HTML, CSS, and JavaScript - no frameworks or build tools required.

## Project Structure

- `index.html` - Main HTML file containing the page structure with navbar and about section
- `main.js` - JavaScript for dynamic image sizing (matches profile picture height to text content)
- `style.css` - Styling using Lazara font from CDN, flexbox layout for profile pic and about text
- `img/` - Contains profile pictures (sahil.jpg, sahil2.jpg)

## Development Commands

### Code Formatting
```bash
npx prettier --write .
```

The project uses Prettier (v3.3.3) for code formatting. Run this before committing changes.

### Local Development
Since this is a static site, simply open `index.html` in a browser to view changes. No build step required.

For local server (if needed):
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Architecture Notes

### Layout System
The site uses a two-column flexbox layout (30% profile pic, 70% about text). The JavaScript dynamically adjusts the profile picture height to match the text block height on load and resize events.

### Navigation
The navbar currently has non-functional buttons (Home, About, Projects, Blog, Contact). These are placeholder UI elements with no click handlers implemented yet.

### Deployment
This is a GitHub Pages site. Changes pushed to the `master` branch are automatically deployed to sahiljain01.github.io.
