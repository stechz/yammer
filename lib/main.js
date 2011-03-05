const pageMod = require("page-mod");
pageMod.PageMod({
  include: "*.yammer.com",
  contentScriptWhen: "ready",
  contentScript: '(function(x) { if (x) x.style.display = "none"; })(document.getElementById("getting-started-wrapper"));',
  onAttach: function() {
    console.log('attached!');
  }
});
