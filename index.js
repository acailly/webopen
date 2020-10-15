#!/usr/bin/env node

const { app, BrowserWindow } = require("deskgap");

app.once("ready", () => {
  const urls = process.argv.slice(1);
  urls.forEach((url) => {
    const win = new BrowserWindow({
      menu: null,
    });
    win.loadURL(url);
  });
});
