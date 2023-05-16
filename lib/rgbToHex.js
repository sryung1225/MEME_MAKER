export function rgbToHex(rgbType) {
  let rgb = rgbType.replace(/[^%,.\d]/g, "").split(",");
  rgb.forEach(function (str, x, arr) {
    /* 컬러값이 "%"일 경우, 변환하기. */
    if (str.indexOf("%") > -1) str = Math.round(parseFloat(str) * 2.55);
    /* 16진수 문자로 변환하기. */
    str = parseInt(str, 10).toString(16);
    if (str.length === 1) str = "0" + str;

    arr[x] = str;
  });

  return "#" + rgb.join("");
}
