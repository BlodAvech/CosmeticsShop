$("#showTimeBtn").click(function() {
  const $datetime = $("#datetime");

  if ($datetime.is(":visible")) {
    $datetime.hide();
    return;
  }

  const now = new Date();
  const saleEnd = new Date();
  saleEnd.setHours(23, 59, 0, 0);

  const diff = saleEnd.getHours() - now.getHours();
  if (diff <= 0) {
    $datetime.text("Sale ended!").css("color", "gray").show();
    return;
  }

  $datetime.text(diff + " hours left until the end of the sale!").css("color", "red").show();
});









