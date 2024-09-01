$("button").hide();
var clicks = 0;
var motion = 20;
// Рандомная точка на изображении
function get_rn_number(size) {
  return Math.floor(Math.random() * size);
}
// Расстояние от клика до клада
function get_distance(event, point) {
  var diffX = event.offsetX - point.x;
  var diffY = event.offsetY - point.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}
// Подсказки
function hint(distance) {
  var color_text = document.getElementById("distance");
  if (distance < 10) {
    $("p").css("color", "red");
    $("p").text("Обожжешься!");
  } else if (distance < 20) {
    $("p").css("color", "#ff5e00");
    $("p").text("Очень горячо");
  } else if (distance < 40) {
    $("p").css("color", "#ff9f10");
    $("p").text("Горячо");
  } else if (distance < 80) {
    $("p").css("color", "#ffee56");
    $("p").text("Тепло");
  } else if (distance < 160) {
    $("p").css("color", "#568bff");
    $("p").text("Холодно");
  } else if (distance < 320) {
    $("p").css("color", "#4b6cff");
    $("p").text("Очень холодно");
  } else if (distance < 420) {
    $("p").css("color", "#0c19cc");
    $("p").text("Очень-очень холодно");
  } else {
    $("p").css("color", "#0000ff");
    $("p").text("Замерзнешь!");
  }
}
// Координаты
var points = {
  x: get_rn_number($("img").width()),
  y: get_rn_number($("img").height()),
};
// Обработчик кликов
$("img").click(function (event) {
  clicks++;
  motion--;
  $("h1").text("Ходов: " + motion);
  // Отображение подсказки
  var distance_h = get_distance(event, points);
  hint(distance_h);
  // Проверка на выигрыш
  if (distance_h < 8 && motion > 0) {
    $("h1").css("color", "#64f538");
    $("h1").text("Клад найден! Сделано кликов: " + clicks);
    $("p").hide();
    $("button").show();
  }
  if (motion <= 0) {
    $("h1").text("Конец игры!");
    $("h1").css("color", "#f51404");
    $("p").hide();
    $("button").show();
  }
});

$("button").click(function () {
  location.reload();
});
