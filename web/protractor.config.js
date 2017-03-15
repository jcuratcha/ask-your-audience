exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/spec/*-spec.js'],
  directConnect: true,
  capabilities: {
      browserName: 'chrome'
  }
}