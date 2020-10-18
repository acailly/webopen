#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

// Copy index.js in temp folder
const tempFolder = fs.mkdtempSync(path.join(os.tmpdir(), "webopen-"));
const sourceIndexFile = path.join(__dirname, "index.js");
const destinationIndexFile = path.join(tempFolder, "index.js");
fs.copyFileSync(sourceIndexFile, destinationIndexFile);

// Set location of index.js
const args = process.argv.slice(2);
args.unshift(tempFolder);

// From https://github.com/nexe/nexe/issues/605#issuecomment-480631784
const childProcess = require("child_process").fork(
  require.resolve("deskgap/cli.js"),
  args,
  {
    stdio: "inherit",
  }
);

childProcess.on("exit", () => {
  fs.unlinkSync(destinationIndexFile);
  fs.rmdirSync(tempFolder);
});
