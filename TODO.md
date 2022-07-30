# TODO

## Bugs

- Project readme content not displaying.
- Memory leaks when tasks are still in progress when the component needs to dismount.
- Example: click open readme for a project then immediately route to home page. An error is logged in the console.
- Error alert messages not correct.
- Dockerized: Fix nginx default page showing when refreshing browser.

## Styling

- Use style classes instead of adding style using component properties where possible.
- Switch to scss modules.

## Misc

- Get _simplebar-react_ scrollbar working.
- Clear alerts on navigate.
- Remove 'any' types, specifically in _useState_.
- Import ordering.
- Change references of _repo/repository_ to _project_.

## Tech Debt

- Update packages: npx ncu -u

## Production

- Double check we're not importing unneeded modules.
- Bundle optimization.
