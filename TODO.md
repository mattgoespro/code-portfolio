# TODO - Initial release

## Features

# API calls

- Cache API responses in components, particularly the ProjectList component.

## Bugs

- Memory leaks when tasks are still in progress when the component needs to dismount. Example: click open readme for a project then immediately route to home page. An error is logged in the console.
- Prod docker frontend starts in base route
- Component keys shouldnt be array index if possible

## Responsive Design

- Mobile support
- Resizing components
- Auto-resize text in project details modal, and other places.

## Styling

- Switch to scss modules.

## Optimization

- Bundle sizes

## Misc

- ESLint import ordering.

## Phase 2

- Implement custom tooltips for hovering.
