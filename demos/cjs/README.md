# CommonJS Example

## Usage

This example is intended to be used in a development environment running Node.js `>=18`

Only a few commands are expected to be used: 

- `npm run pack:package`: cleans existing installs, packs and installs the parent package
- `npm start` runs `pack:package` and executes `index.cjs`
- `npm run start:noinstall`: executes `index.cjs` without running `pack:package`