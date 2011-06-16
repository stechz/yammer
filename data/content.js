var killingMessagesSoon = false;
function killGroupMessagesSoon() {
  if (killingMessagesSoon)
    return;
  killingMessagesSoon = true;

  setTimeout(function() {
    killGroupMessages();
    killingMessagesSoon = false;
  }, 0);
}

function killGroupMessages() {
  if (document.title.indexOf("Company Feed") == -1)
    return;

  var groupNodes = document.querySelectorAll("span.groups-icon");
  var groups = [];
  for (var i = 0; i < groupNodes.length; i++)
    groups.push(groupNodes[i].parentNode.textContent.trim());

  var groupLabels = document.querySelectorAll(".yj-group-label");
  for (var i = 0; i < groupLabels.length; i++) {
    var link = groupLabels[i].querySelector("a");
    if (groups.indexOf(link.title.toString().trim()) == -1) {
      var message = groupLabels[i].parentNode.parentNode.parentNode.parentNode.parentNode;
      message.parentNode.removeChild(message);
    }
  }
}

window.addEventListener("load", function loadFn() {
  window.removeEventListener("load", loadFn, false);

  killGroupMessagesSoon();

  var column2 = document.getElementById("column-two");
  column2.addEventListener("DOMNodeInserted", function(e) {
    if (e.target.parentNode.className == "yj-feed-messages")
      killGroupMessagesSoon();
  }, false);
}, false);
