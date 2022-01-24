// display current day in header
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDay);

// save tasks to localStorage
tasks = [];

var saveTasks = function () {
  localStorage.setItem("tasks", tasks);
};

$("#save-btn").on("click", function () {
  console.log($("#task").textContent);
});
