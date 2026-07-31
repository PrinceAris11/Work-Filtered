# Work-Filtered Portfolio

A static portfolio site featuring a `/work` page with a category-filter system.

## Features
- **Project Cards**: A responsive grid of project cards with titles, descriptions, and tags.
- **Category Filter**: Buttons to show/hide matching cards (e.g., All, AI, Creative Coding, Freelance).
- **Smooth Transitions**: Filtering uses smooth CSS transitions (opacity and scaling) without abrupt layout jumps.
- **No Page Reload**: The filtering happens instantly on the client side.
- **Vanilla JavaScript**: No external libraries (like jQuery or React) are used.
- **Graceful Degradation**: If JavaScript is disabled, all cards remain visible without breaking the layout or leaving an empty state.

## Setup and Usage
1. Clone the repository or download the files.
2. Serve the directory with any local HTTP server. For example, using Python 3:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000/work.html` in your web browser.
