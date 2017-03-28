exports.config = {
  framework: 'jasmine',
  specs: ['src/spec/*-spec.js'],
  directConnect: true,
  capabilities: {
      browserName: 'chrome'
  }
}