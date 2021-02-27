# Add scss loaders to create-react-app

If you want to add more scss webpack loaders into your [create react app](https://github.com/facebook/create-react-app) without the need of ejecting in react, then [Rewire your app](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project) and install this package that can include that extra loader for you.

# Install

```bash
yarn add react-app-rewired react-app-rewire-scss-loaders -D
npm install react-app-rewired react-app-rewire-scss-loaders --save-dev
```

# Add it to your project

Firstly [Rewire your app](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project) then create/modify your `config-overrides.js`

Secondly (as example) if you want to share global scss variables across your project without importing files then try this example
[sass-resources-loader](https://github.com/spryker/sass-resources-loader).

```javascript
/* config-overrides.js */

const addRewireScssLoader = require("react-app-rewire-scss-loaders");

module.exports = function override(config, env) {
    
  config = addRewireScssLoader("sass-resources-loader", {
    resources: path.resolve(__dirname, "variables.scss"),
  })(config, env);

  return config;
};
```
