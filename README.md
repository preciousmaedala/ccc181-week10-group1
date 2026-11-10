# CCC181 Week 10: CampusConnect Mobile-First Login Page

React + TypeScript starter for the Week 10 group activity. The page is already
built. Your group's job is the **mobile-first CSS** and the **GitHub teamwork**.

## How to Run the Project

**1. Install Dependencies**

Open a terminal in the project root and run:

    npm install

Install the backend dependencies:

    cd server
    npm install
    cd ..

**2. Configure Environment Variables**

  Create the root .env file using the root .env.example.

  Create the backend server/.env file using server/.env.example.

  Do not upload or commit the actual .env files to GitHub.

**3. Start the Backend**

  Open a terminal and run:

    cd server
    npm start

  The backend runs at:

    http://localhost:3000

**4. Start the Frontend**

  Open a second terminal in the project root and run:

    npm run dev

  Open the local URL provided by Vite, usually:

    http://localhost:5173

**5. Demo Account**

  Use the following credentials to test the login:

    Email: student@campusconnect.test

    Password: Campus26

  A successful login displays the Welcome screen with the name Demo Student.

**6. Build Check**

  To verify the frontend production build, run this command in the project root:

    npm run build

## API Summary

The CampusConnect backend provides the following API endpoints:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/health` | Checks if the backend API is running. |
| POST | `/api/v1/sessions` | Authenticates a user and creates a login session. |
| GET | `/api/v1/users/me` | Retrieves the profile of the authenticated user. |

For detailed endpoint specifications, request and response examples, and the Events API design, see the [API Specification](docs/API-SPEC.md).

## Screenshots

### Postman API Tests

- [Health Check](screenshots/postman-health.png)
- [Successful Login](screenshots/postman-login-200.png)
- [Failed Login](screenshots/postman-login-401.png)
- [Unauthorized Profile Access](screenshots/postman-me-401.png)

### Frontend Login (360px)

- [Login Failed](screenshots/login-fail-360.png)
- [Login Successful](screenshots/login-success-360.png)

## Rules

### Part 1 – Mobile-First CSS
- Edit only the CSS files in `src/styles/` (one member = one file). Do not edit `reset.css`.
- Plain CSS only. No Tailwind, Bootstrap, Material UI, styled-components, or any UI library.
- Phone styles first (no media query), then `min-width` queries only. Never `max-width`.
- Do not edit the `.tsx` files or rename classes. If you must, tell the group first.

### Part 2 – Backend and Frontend Integration
- Follow the assigned member responsibilities when editing backend and frontend files.
- Use the required API endpoints and maintain the agreed project structure.
- Keep actual `.env` files and secrets out of GitHub. Commit only `.env.example` files.
- Test the backend and frontend before submission.
- 
## Group information (fill in)

| Item | Your answer |
| --- | --- |
| Group number | Group 1 |
| Section | IT3-B |
| Repository URL | https://github.com/preciousmaedala/ccc181-week10-group1 |

## Members (each member fills in their own row in their own commit)

| Member | Name | GitHub username | CSS file | What I did in Part 1 | What I did in Part 2 |
|---|---|---|---|---|---|
| 1 (Leader) | Precious Mae D. Dala | preciousmaedala | `base.css` | Created mobile-first and responsive page layouts | Set up the Express backend, environment configuration, demo login, and health endpoint. |
| 2 | Jasson Lumacad | jassonlumacad | `nav.css` | Styled the mobile-first navigation bar and footer in nav.css |
| 3 | Janel Bactong | janelbactong | `form.css` | Built the login card and form (Flexbox)|

## Experiment 0: the page without the viewport tag

What did the page look like in DevTools phone mode **before** adding the viewport meta tag?
What changed **after** adding it?

Before: The page appeared zoomed out and very small in phone mode.

After: The page adjusted to the phone's screen width, making the content easier to read and properly sized.
## DevTools test results

| Width | What must be true | Pass? |
| --- | --- | --- |
| 360 px | 1 column. Nav links stacked and 48px tall. Options and buttons stacked. Footer in 1 column. No sideways scrollbar. | Pass |
| 768 px | Nav in one row (brand left, links right). Checkbox and link in one row. Two buttons side by side. | Pass |
| 1024 px | Brand panel and login card side by side. Footer in 3 columns. Heading is larger. | Pass |
| 1280 px | Content centered and stops at 1200px. | Pass |

### Breakpoints I observed

Using **Show media queries** and dragging slowly from 360 px to 1280 px, the layout changed at these exact widths:

The layout changed at 768px, 1024px, and 1280px as the responsive breakpoints were applied. No major layout issues were observed during testing.
Screenshots are in `screenshots/` as `360.png`, `768.png`, `1024.png`, `1280.png`.

## What our group learned (leader writes this last)

Our group learned how to work together using GitHub, apply mobile-first CSS, and create responsive layouts for different screen sizes. We also learned the importance of teamwork, communication, and reviewing each other's work to build a complete and functional website.
