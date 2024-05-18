document.getElementById("btn1").addEventListener("click", function() {
  document.getElementById("juego1").style.display = "block";
  document.getElementById("juego2").style.display = "none";
});

document.getElementById("btn2").addEventListener("click", function() {
  document.getElementById("juego2").style.display = "block";
  document.getElementById("juego1").style.display = "none";
});
