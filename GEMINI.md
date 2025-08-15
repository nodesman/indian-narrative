## Project Overview

This is a Jekyll-based website that serves as a platform for understanding and shaping the "Indian Narrative." The site is built with Ruby (Jekyll) for static site generation, and uses JavaScript for interactive elements like tabs and collapsible sections. The content is written in Markdown and is organized into different "narratives."

## Building and Running

To build and run the project locally, use the following command:

```bash
npm start
```

This will start a local development server with live reloading.

## Development Conventions

*   **Content:** All content is written in Markdown files. Each file represents a different "narrative" or a section of the website.
*   **Layouts:** The `_layouts` directory contains the HTML structure for different types of pages.
*   **Styling:** The site uses SCSS for styling. The main stylesheet is located at `assets/css/main.scss`, which imports variables and base styles from the `_sass` directory.
*   **Interactivity:** JavaScript is used for UI elements like tabs and collapsible sections. The scripts are embedded directly in the HTML files.

## Key Files and Directories

*   `_config.yml`: The main configuration file for the Jekyll site.
*   `_config_dev.yml`: A development-specific configuration file.
*   `Gemfile`: The Ruby dependency file.
*   `package.json`: The Node.js dependency file.
*   `index.md`: The home page of the website.
*   `*.md`: The various markdown files that contain the content of the website.
*   `_layouts`: Contains the HTML layouts for the pages.
*   `_sass`: Contains the SCSS partials.
*   `assets`: Contains the CSS and images.
*   `_site`: The output directory for the generated static site.
