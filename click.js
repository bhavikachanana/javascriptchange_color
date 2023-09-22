let color= ['red','pink','blue','grey','orange','green'];
function myfunction(){
     
      let randomcolor = color[Math.floor(Math.random()*color.length)];
      document.body.style.background = randomcolor;
}