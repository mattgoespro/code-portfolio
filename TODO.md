# IMPORTANT!

## NGINX

- Enable HTTPS using SSL certificates.

## API Response Caching

- Cache API responses using React-Redux
  - Important for ProjectPage

## Bugs

- Image assets from Webpack **_publicPath_** not being bundled in build.
- **STILL AN ISSUE?** Frontend in Docker Container base URL displays nothing.

## Optimization

- Minimize bundle sizes
- Remove unused CSS styles

# Nice To Have

## Responsive Design

- Responsive components for different media sizes.

## Encapsulated Component Styles

- Switch to **scss** **modules** to prevent style leakage bugs.

## Testing Edge Cases

### Handle cases where:

- User navigates to unknown route
- Repo does not exist during view/refresh/navigate
- Backend is down
- Backend crashes
- Backend API request limit is reached
- Project Page
  - GitHub repo is not initialized
  - No skills (possibly just ignore the project on the backend then)
  - Language pie chart has no languages
  - README does not exist
  - README is empty

# Not Very Important

- ESLint import ordering rules.
