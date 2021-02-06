/**
 * Function that allows to overwrite default Create React App webpack config.
 * By this function we can add new scss/sass loaders.
 *
 * @loader  {string} loader - loader name
 * @options {object} options - Loader options
 */
function addRewireScssLoader(loader = "", options = {}) {
  return function (config, env) {

    let scssRulesPosition = 0;
    let scssExistingRules = [];
    const scssRegex = /\.(scss|sass)$/;

    // Find scss or sass rules in Webpack config.
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach(({ test, use }, index) => {
          if (
            test &&
            test.toString() === scssRegex.toString()
          ) {
            scssExistingRules = use;
            scssRulesPosition = index;
          }
        });
      }
    });

    // All scss/sass rules merged in one object.
    const scssRules = {
      test: scssRegex,
      use: [...scssExistingRules, { loader, options }],
    };

    const oneOfRule = config.module.rules.find(
      (rule) => rule.oneOf !== undefined
    );

    // Replace existing rules.
    if (oneOfRule) oneOfRule.oneOf.splice(scssRulesPosition, 1, scssRules)

    return config;
  };
}

module.exports = addRewireScssLoader;
