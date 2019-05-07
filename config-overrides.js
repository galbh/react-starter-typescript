const {
  override,
  useEslintRc,
  enableEslintTypescript
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('customize-cra');

// eslint-disable-next-line no-undef
module.exports = override(useEslintRc(), enableEslintTypescript());
