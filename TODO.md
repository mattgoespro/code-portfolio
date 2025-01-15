# IMPORTANT

## View Repo

- List repository tags below title.

## Accessibility

- Add aria labels to components
- Check tabindex order of elements

## Optimization

- Utilize the [React compiler babel plugin](https://www.npmjs.com/package/babel-plugin-react-compiler) for optimization during build time.
- Install _Web Vitals_ chrome plugin for measuring performance
- Try out _Unlighthouse_ to test performance for all pages
- Minimize bundle sizes
- Remove unused CSS styles
- Fix slow image loading speed:
  - Investigate CDNs for image loading
  - `img fetchpriority="high/low"`

## Nice To Have

- ESLint import ordering rules.
- Stylelint integration

## Testing Edge Cases

Handle cases where

- Repository has very long name
- User navigates to unknown route
- Repo does not exist during view/refresh/navigate
- Backend is down
- Backend crashes
- Backend API request limit is reached
- Project Page
  - GitHub repo is not initialized
  - Language pie chart has no languages
  - README does not exist
  - README is empty

## Misc

- Dependency updates
- Add font-family fallbacks to stylesheets
- Switch to css module typedef named exports [typedef named exports](https://github.com/Jimdo/typings-for-css-modules-loader#namedexport-option)
