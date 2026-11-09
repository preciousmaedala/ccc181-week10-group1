# CCC181 Week 10: CampusConnect Mobile-First Login Page

React + TypeScript starter for the Week 10 group activity. The page is already
built. Your group's job is the **mobile-first CSS** and the **GitHub teamwork**.

## Run it

```bash
npm install
npm run dev          # open the local URL it prints
npm run dev:phone    # same, but your phone (same Wi-Fi) can open the Network URL
npm run build        # must finish with no errors before you submit
```

## Rules

## Rules

- Use plain CSS only. No Tailwind, Bootstrap, Material UI, styled-components, or other UI libraries.
- Follow a mobile-first design approach.
- Use `min-width` media queries only. Do not use `max-width`.
- Use `rem` and `%` units where appropriate.
- Ensure buttons and interactive elements have a minimum tap target of 48px × 48px.
- Provide `:focus-visible` styles for interactive elements that have `:hover` styles.
- Keep `.env` files private. Commit only `.env.example` files.
- Follow the assigned group responsibilities when modifying project files.


## Group information (fill in)

| Item | Your answer |
| --- | --- |
| Group number | Group 1 |
| Section | IT3-B |
| Repository URL | https://github.com/preciousmaedala/ccc181-week10-group1 |

## Members (each member fills in their own row in their own commit)

| Member | Name | GitHub username | CSS file | What I did |
| --- | --- | --- | --- | --- |

| 1 (leader) | Precious Mae D. Dala | preciousmaedala | `base.css` | Created mobile-first and responsive page layouts in base.css |
| 2 | Jasson Lumacad | jassonlumacad | `nav.css` | Styled the mobile-first navigation bar and footer in nav.css |
| 3 | Janel Bactong | janelbactong | `form.css` | Built the login card and form (Flexbox) |

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
