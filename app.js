$(document).ready(function () {
  "C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) =".split(" ").map((symbol) => {
    $(".calculator").append(
      `<div class="calculator__keyboard"><button class="calculator__btn" value="${symbol}">${symbol}`
    );
  });

  const output = $("output");
  $("button").click(function () {
    calculated(this.value);
  });

  function calculated(value) {
    switch (value) {
      case "=":
        try {
          output[0].textContent = Math.trunc(
            math.evaluate(output[0].textContent)
          );
        } catch {
          const oldValue = output[0].textContent;
          const newValue = "недопустимое выражение";
          output[0].textContent = newValue;
          setTimeout(() => {
            output[0].textContent = oldValue;
          }, 1500);
        }
        break;
      case "C":
        output[0].textContent = "";
        break;
      case "CE":
        output[0].textContent = output[0].textContent.substring(
          0,
          output[0].textContent.length - 1
        );
        break;
      default:
        output[0].textContent += value;
        break;
    }
  }
});



