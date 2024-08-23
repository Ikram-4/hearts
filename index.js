const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (Event)=>{
    const xpos =Event.offsetX;
    const ypos = Event.offsetY;
    const spanE1 = document.createElement("span");
    spanE1.style.position = "absolute"; 
    spanE1.style.left=xpos+"px";
    spanE1.style.top=ypos+"px";
const size=Math.random()*100;
spanE1.style.width = size+"px"
spanE1.style.height = size+"px"
spanE1.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Add some style to make it visible
    spanE1.style.borderRadius = "50%"; // Make it circular
    spanE1.style.pointerEvents = "none";
    bodyE1.appendChild(spanE1);
    setTimeout(() => {
        spanE1.remove();
    }, 3000);
});