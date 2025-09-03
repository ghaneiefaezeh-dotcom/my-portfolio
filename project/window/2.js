const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive =1;
next.addEventListener('click',()  => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
   
   update();
})


prev.addEventListener('click',() => {
    currentActive--;
    if(currentActive <1){
        currentActive = 1;
    }
   
   update();
})
function update(){
for(let[idx,circle] of circles.entrise()){
    if(idx < currentActive){
        circle.classlist.add('active');
    }
    else {
         circle.classlist.remove('active');
        }

    }
    
    

    if(currentActive===1){
        prev.disabled = true;
        
        }
        else if (currentActive=== circles.length){
            next.disabled = true;
        }
        else {
            prev.disabled=false;
            next.disabled=false;

        }
 
    }

     

