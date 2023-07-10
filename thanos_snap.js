window.onload = function() {
  var fate = document.getElementById("fate");
  fate.onclick = fateFunction;
}

function fateFunction() {
  var outcome = document.getElementById("outcome");
  var x = Math.ceil(Math.random() * 10);
  if (x > 5) {
    outcome.innerHTML = "You were spared by Thanos";
    outcome.style.color = "blue";
  } else {
    outcome.innerHTML = "You were snapped by Thanos";
    outcome.style.color = "red";
  }
}
