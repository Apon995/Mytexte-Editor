const textBold = () => {
  document.getElementById("text-input").classList.toggle("font-black");
};

const textItalic = () => {
  document.getElementById("text-input").classList.toggle("italic");
};

const textUnderline = () => {
  document.getElementById("text-input").classList.toggle("underline");

  console.log("clicked underline");
};

const textRight = () => {
  document.getElementById("text-input").style.textAlign = "right";
};
const textAlign = () => {
  document.getElementById("text-input").style.textAlign = "justify";
};

const textCenter = () => {
  document.getElementById("text-input").style.textAlign = "center";
};

const textLeft = () => {
  document.getElementById("text-input").style.textAlign = "left";
};

const textvalue = (event) => {
  let value = event.value + "px";
  document.getElementById("text-input").style.fontSize = value;
  console.log(value);
};

const colorpic = (event) => {
  let color = event.value;
  document.getElementById("text-input").style.color = color;
};

const copytoclipboard = () => {
  let text = document.getElementById("text-input");
  text.select();
  navigator.clipboard.writeText(text.value);
  alert("copied " + text.value);
};

const speak = () => {
  let text = document.getElementById("text-input").value;
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;

  window.speechSynthesis.speak(msg);
};

const changeFontfamily = () => {
  let fontfamiles = [
    "Courier New",
    " Courier",
    "monospace",
    " cursive",
    "Cambria",
    " Cochin",
    "Georgia",
    "Times",
    "Times New Roman",
    " serif",
    "sans-serif",
    "system-ui",
    " -apple-system",
    " BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    " Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif",
    "Segoe UI",
    " Tahoma",
    "Geneva",
    "Verdana",
    "sans-serif",
    "Lucida Sans",
    "Lucida Sans Regular",
    "Lucida Grande",
    "Lucida Sans Unicode",
    " Geneva",
    " Verdana",
    "sans-serif",
    "Arial",
    "Helvetica",
    "sans-serif",
    "Verdana",
    "Geneva",
    "Tahoma",
    "sans-serif",
    "Trebuchet MS",
    "Lucida Sans Unicode",
    "Lucida Grande",
    "Lucida Sans",
    "Arial",
    "sans-serif system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    " Ubuntu",
    "Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif",
  ];

  let randomgenerator = Math.floor(Math.random() * fontfamiles.length);
  fontfamiles = fontfamiles[randomgenerator];

  document.getElementById("text-input").style.fontFamily = fontfamiles;
};

const reversetext = () => {
  let text = document.getElementById("text-input").value;
  let spilwords = text.split(" ");
  let reversword = spilwords.reverse();
  let joinword = reversword.join(" ");
  document.getElementById("text-input").value = joinword;
};
const removespace = () => {
  let text = document.getElementById("text-input").value;
  let newtext = text.split(/[ ]+/);
  let jointext = newtext.join(" ");
  document.getElementById("text-input").value = jointext;
};

const clearinput = () => {
  document.getElementById("text-input").value = "";
  window.speechSynthesis.cancel();
};
