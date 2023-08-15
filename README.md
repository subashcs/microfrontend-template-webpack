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
yarn
yarn start
```

`host` is the main app using our micro-frontends and both `app2` and `app3` are independently deployed apps:

- `host`: http://localhost:3001
- `app2`: http://localhost:3002
- `app3`: http://localhost:3003

Check out this link below for more examples:

[https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples)
