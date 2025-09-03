const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click' , () => {
        removeactiveclass()
        panel.classList.add('active')
    })
})
function removeactiveclass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}
const progressfill = document.getElementById('progressfill');
const percentageElement = document.getElementById('percentage');
const genderinfoElement = document.getElementById('genderinfo');
const decreasebtn = document.getElementById('decreasebtn');
const increasebtn = document.getElementById('increasebtn');
let currentproress = 50;
let malecount = 0;
function updateprogress(){
    currentprogress = Math.max(0,Math.min(100, currentprogress));
    progressfill.style.width = '${currentprogress}%';
    percentageElement.textContent = '${currentprogress}%';
    genderinfoElement.textContent = '(male:${malecount})';
    decreasebtn.disabled = currentprogress <=0;
    increasebtn.disabled = currentprogress >=100;
}
decreasebtn.addEventListener('click', () =>{
    currentprogress -=10;
    malecount = Math.max(0,malecount -1 );
    updateprogress();
});
increasebtn.addEventListener('click', () =>{
    currentprogress +=10;
    malecount += 1;
    updateprogress();
});
