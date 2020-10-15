// From https://github.com/nexe/nexe/issues/605#issuecomment-480631784
const args = process.argv.slice(2);
args.unshift(".");

require("child_process").fork(require.resolve("deskgap/cli.js"), args, {
  stdio: "inherit",
});
