$("#brightness i").on("click", function() {
  $("#brightness i").toggleClass("active");
  $("body").toggleClass("light dark");
});
