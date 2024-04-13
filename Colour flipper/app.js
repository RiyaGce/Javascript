const colors=["green","red","rgba(133,122,200)","#f15025","blue","violet"]
const button=document.querySelector("button");
const body=document.querySelector("body");
button.addEventListener("click",change)
function change()
{
    
    const RandomNumber=getRandomNumber();
    body.style.backgroundColor=colors[RandomNumber]
}
function getRandomNumber()
{
    return Math.floor(Math.random()*colors.length)
}

