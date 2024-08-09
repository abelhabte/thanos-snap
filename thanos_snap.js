window.onload = function() {
  let fate = document.getElementById("fate");
  fate.onclick = fateFunction;
}

function fateFunction() {
  let outcome = document.getElementById("outcome");
  let x = Math.ceil(Math.random() * 10);

  if (x > 5) {
    outcome.innerHTML = "You were spared by Thanos";
    outcome.style.color = "blue";
  }
  else {
    outcome.innerHTML = "You were snapped by Thanos";
    outcome.style.color = "red";
  }
}
