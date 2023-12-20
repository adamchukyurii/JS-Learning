const block = document.querySelector('#d1');

block.onmousedown = (e) => {
   let bgColor;
   switch ( e.which ) {
      case 1:
         bgColor = 'lime';
         break;
      case 2:
         bgColor = 'aqua';
         break;
      case 3:
         bgColor = 'tomato';
         break;
   }
   block.style.backgroundColor = bgColor;
}

window.oncontextmenu = () => {
   return false;
};

document.body.onkeydown = (e) => {
   let txt = '';
   if (e.ctrlKey) txt += 'Ctrl - ';
   if (e.altKey) txt += 'Alt - ';
   if (e.shiftKey) txt += 'Shift - ';
   txt += e.key;
   out.innerText = txt;
}