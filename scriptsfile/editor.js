const textBold = () => {
  document.getElementById("text-input").classList.toggle("font-black");
};

const textItalic = () => {
  document.getElementById("text-input").classList.toggle("italic");
};

const textUnderline = () => {
  document.getElementById("text-input").classList.toggle("underline");

  console.log('clicked underline')
};


const textRight = () => {
  document.getElementById("text-input").style.textAlign = 'right';


};
const textAlign = () => {
  document.getElementById("text-input").style.textAlign = 'justify';


};

const textCenter = () => {
  document.getElementById("text-input").style.textAlign = 'center';


};


const textLeft = () => {
  document.getElementById("text-input").style.textAlign = 'left';


};


const textvalue = (event) => {
  let value = event.value + 'px';
  document.getElementById("text-input").style.fontSize = value;
  console.log(value)

}


const colorpic = (event) => {
  let color = event.value;
  document.getElementById("text-input").style.color = color;

}

const copytoclipboard = () => {
  let text = document.getElementById("text-input");
  text.select();
  navigator.clipboard.writeText(text.value);
  alert('copied ' + text.value);
}

const speak=()=>{
  let text = document.getElementById('text-input').value;
  let msg = new SpeechSynthesisUtterance();
  msg.text = text; 

  window.speechSynthesis.speak(msg);
  
}



const reversetext = () => {
  let text = document.getElementById("text-input").value;
  let spilwords = text.split(' ');
  let reversword = spilwords.reverse();
  let joinword = reversword.join(' ');
  document.getElementById("text-input").value = joinword;

}
const removespace = () => {
  let text = document.getElementById("text-input").value;
  let newtext = text.split(/[ ]+/);
  let jointext = newtext.join(' ');

  console.log(jointext)
  document.getElementById("text-input").value = jointext;
}



const clearinput = () => {
  document.getElementById("text-input").value = '';
}

