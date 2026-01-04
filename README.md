# FlowMatrix AI Website

## Project info

A React + TypeScript website built with Vite, showcasing AI automation solutions.

## How to develop

**Use your preferred IDE**

Clone this repo and push changes to work on the project locally.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Templates System

The website includes a complete templates/resources system for lead generation.

### Pages
- `/free` - Browse all free templates, demos, and resources
- `/free/:slug` - Individual template detail pages with email gate

### Features
- Email capture before template access
- localStorage persistence for returning visitors
- Supabase integration for email storage and analytics
- YouTube video embeds
- Multi-tab synchronization
- Type-based filtering (template, demo, document, discount, tool, course)
- Label-based filtering
- Search functionality
- Responsive design (mobile-first)

### Tech Stack
- **Frontend:** React + TypeScript + Tailwind CSS
- **Backend:** Supabase (PostgreSQL with Row Level Security)
- **UI Components:** shadcn/ui
- **Forms:** Native HTML5 with custom validation
- **Video:** YouTube embed API

### Documentation
- `/TESTING_GUIDE.md` - Comprehensive testing procedures
- `/docs/DEPLOYMENT.md` - Production deployment guide
- `/docs/SECURITY_CHECKLIST.md` - Security verification steps
- `/supabase/migrations/reset_templates_system.sql` - Database schema
- `/supabase/migrations/templates_quick_queries.sql` - Useful SQL queries
- `/supabase/migrations/RESET_INSTRUCTIONS.md` - Database setup guide

### Quick Start

1. **Setup Supabase:**
   ```bash
   # Run in Supabase SQL Editor
   # See: supabase/migrations/RESET_INSTRUCTIONS.md
   ```

2. **Configure Environment:**
   ```bash
   cp .env.production.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

3. **Start Development:**
   ```bash
   npm run dev
   # Visit http://localhost:8080/free
   ```

4. **Add Templates:**
   - Use Supabase Table Editor
   - Or run INSERT queries from templates_quick_queries.sql

## How can I deploy this project?

Build the project using `npm run build` and deploy the `dist` folder to your hosting provider.

**For Templates System deployment, see `/docs/DEPLOYMENT.md` for complete guide.**
