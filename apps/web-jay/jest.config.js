module.exports = {
  name: 'web-jay',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-jay/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
