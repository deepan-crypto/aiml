# Publishing to GitHub Packages

This project is configured to publish to GitHub Packages.

## Setup Instructions

1. **Update placeholders** in the following files:
   - Replace `YOUR_USERNAME` with your GitHub username
   - Replace `YOUR_REPO` with your repository name

2. **Files to update**:
   - `package.json`: Update the name field and repository URL
   - `.github/workflows/publish.yml`: Update the scope field
   - `.npmrc`: Update the registry scope

3. **Publishing**:
   - On push to main branch
   - On release creation
   - Manual: `npm publish`

## Installation from GitHub Packages

```bash
npm install @your-username/web
```

## Local Development

```bash
npm install
npm run dev
