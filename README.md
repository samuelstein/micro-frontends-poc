# Transclusion Example

This POC shows how to compose independent html components into a container app which is better known as: **micro-frontends**.   
It uses the great(est) webpack feature: [module federation](https://webpack.js.org/concepts/module-federation/) for client-side integration of independent components at runtime.

## How to use

Run the following commands in the root directory:

```bash
npm run start
```

The micro-frontends are independently deployed via [lerna](https://lerna.js.org/):

- `shelf`: http://localhost:3000
- `app1`: http://localhost:3001
- `app2`: http://localhost:3002

Check out this link for more examples: [https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples)
