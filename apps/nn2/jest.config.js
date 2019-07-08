module.exports = {
  name: 'nn2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nn2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
