const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");
const button = document.getElementById("btn");

const submitQR = () => {
  const url = document.getElementById("url").value;
  console.log(url);
  if (url == "") {
    disabledBtn();
    qrBgImg();
  } else {
    clearQR();
    generateRCode(url);
  }
};

const generateRCode = (url) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: 200,
    height: 200,
  });

  setTimeout(() => {
    saveQRImg(qrSrc);
  }, 1000);
};

const clearQR = () => {
  qr.innerHTML = "";
};

const qrBgImg = () => {
  const qrImg = "<img src='./img/qr-code.png' alt=''/>";
  qr.innerHTML = qrImg;
};

const saveQRImg = (qrSrc) => {
  button.href = qr.children[1].src;
  button.download = "qrcode";
};

const disabledBtn = () => {
  button.removeAttribute("download");
};

button.addEventListener("click", saveQRImg);

url.addEventListener("paste", submitQR);

url.addEventListener("input", submitQR);
