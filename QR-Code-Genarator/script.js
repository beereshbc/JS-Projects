const qrText = document.getElementById("qr-text");
const qrImg = document.getElementById("qr-img");
const imgBox = document.getElementById("img-box");

const QRGenarator = () => {
  if (qrText.value) {
    qrImg.src = `https://quickchart.io/qr?text=${qrText.value}&ecLevel=H&size=200`;
    imgBox.classList.add("box-show");
  } else {
  }
};
