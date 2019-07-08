module.exports = {
  name: 'docu-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/docu-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
