const pageMod = require("page-mod");
const self = require("self");
pageMod.PageMod({
  include: "*.yammer.com",
  contentScriptWhen: "ready",
  contentScriptFile: self.data.url("content.js")
});
