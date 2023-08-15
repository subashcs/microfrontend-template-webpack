# Microfrontend Project with Webpack Module Federation bootstrapped with Lerna

This project uses Lerna to manage multiple microfrontends, each bundled using Webpack Module Federation.

## Prerequisites

- Node.js (>= 16.15.x)
- yarn (latest)
- lerna (>=5.4.2)

## Installation

After cloning the repository, navigate to the project root and install the dependencies:

```bash
 lerna bootstrap
```

## How to use

Run the following commands in the root directory.

```bash
yarn start
```

`host` is the main app using our micro-frontends and both `app2` and `app3` are independently deployed apps:

- `host`: Runs on http://localhost:3001 and uses React.js
- `app2`: Runs on http://localhost:3002 and uses React.js
- `app3`: Runs on http://localhost:3003 and uses Solid.js

Check out this link below for more examples:

[https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples)
