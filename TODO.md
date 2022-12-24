# IMPORTANT

## Sizing unit

- Convert font-size units from _px_ to _rem_.
- Imported nav bar SVG styles (like hover) not applying

## View Repo

- Add portfolio skills from backend endpoint.

## NGINX

- Enable HTTPS using SSL certificates.

## Optimization

- Minimize bundle sizes
- Remove unused CSS styles

## Nice To Have

- ESLint import ordering rules.

### Responsive Design

Absolute minimum handheld device width is 280px.

## Testing Edge Cases

Handle cases where

- User navigates to unknown route
- Repo does not exist during view/refresh/navigate
- Backend is down
- Backend crashes
- Backend API request limit is reached
- Project Page
  - GitHub repo is not initialized
  - No portfolio.json or fields missing
  - Language pie chart has no languages
  - README does not exist
  - README is empty
