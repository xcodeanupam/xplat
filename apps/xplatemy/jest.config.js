module.exports = {
  name: "xplatemy",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/xplatemy/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
