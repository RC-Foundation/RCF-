# Rhizome Community Foundation Website

This repository contains the source code for the Rhizome Community Foundation website. The project is based on the Bolt Vite React TypeScript template.

Static resources for the Knowledge Hub now live in `src/knowledge-hub` and are copied into the final build using `vite-plugin-static-copy`.

Images and other assets have been moved under `public/assets` to keep the repository root clean.

Copy `.env.example` to `.env` and adjust the values as needed. Currently only `PORT` is required for the Express API.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

   Ensure you run this command in an environment with internet access so that packages like `@eslint/js` can be installed.

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Run the API server**

   ```bash
   npm run dev:server
   ```

4. **Lint the project**

   ```bash
   npm run lint
   ```

   If linting fails with a `Cannot find package '@eslint/js'` error, make sure the dependencies have been installed correctly.

5. **Configure scraping sources**

   Set the `SCRAPE_URLS` environment variable to a comma separated list of URLs to scrape. These can be normal web pages or `.ics` calendar feeds. Example:

   ```bash
    export SCRAPE_URLS="https://calendar.example/events.ics,https://another.org/events"
   ```

6. **Build for production**

   ```bash
   npm run build
   ```

   This compiles both the front-end and the Express API into the `dist/` directory.

7. **Start the production server**

   ```bash
   npm run start:prod
   ```

   The server listens on the port defined by the `PORT` environment variable (defaults to `3001`).

## Deployment Notes

- This repository now includes a `_headers` file that sets basic security headers processed by Netlify during deployment.
- To deploy on Netlify, create a new site pointing to this repository and enable SSL in the Netlify dashboard. If Netlify refuses to provision SSL, verify that your domain DNS records point to Netlify and that no conflicting certificates exist.
- The codebase does not currently integrate with Supabase or Neon. Any references to those services are likely from previous experiments or external configurations not present in this repository.

\n## License\n\nThis project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
