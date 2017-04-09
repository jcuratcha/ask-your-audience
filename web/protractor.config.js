exports.config = {
  framework: 'jasmine',
  specs: ['src/spec/e2e/*.spec.js'],
  directConnect: true,
  capabilities: {
      browserName: 'chrome'
  }
}