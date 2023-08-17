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


const textvalue=(event)=>{
    let value = event.value + 'px';
    document.getElementById("text-input").style.fontSize = value; 
    console.log(value)

}


const colorpic=(event)=>{
   let color = event.value ; 
   document.getElementById("text-input").style.color = color; 
   console.log(color);
}

const clearinput=()=>{
    document.getElementById("text-input").value = '';
}