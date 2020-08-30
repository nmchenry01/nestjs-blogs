# NestJS with Swagger

This is the repository for demo code for a Medium article on debugging NestJS with VSCode

## Installation

```bash
npm run build
```

## Running Locally

For running the debugger using the `Debug Nest Framework` configuration in `launch.json`, set a breakpoint in your code. Then navigate to the VSCode debugging panel in the activity bar, choose `Debug Nest Framework` from the dropdown, and press `Run`.

For running the debugger using the nodemon configuration, run the following:

```bash
npm run start:debug
```

For an example of debugging NestJS unit tests, set a breakpoint somewhere in `app.controller.spec.ts` and select/run the `Debug Jest Tests` configuration in the VSCode debugger panel.