const red=document.querySelector(".red")
const cyan=document.querySelector(".cyan")
const violet=document.querySelector(".violet")
const orange=document.querySelector(".orange")
const pink=document.querySelector(".pink")
// const bg=document.querySelector("body")
const center=document.querySelector(".center")



const getColor = (selectedElement)=> (
    window.getComputedStyle(selectedElement).backgroundColor
    )



const magic=(element,id,color,bg)=>{
    let colorName
    switch (id) {
        case 1:
            colorName="red"
            break;
        case 2:
            colorName="cyan"
            break;
        case 3:
            colorName="violet"
            break;
        case 4:
            colorName="orange"
            break;
        case 5:
            colorName="pink"
            break;
    
        default:
            colorName=""
            break;
    }
    element.addEventListener('mouseenter',()=>{
        center.style.background=color
        center.innerHTML=colorName
    })

    element.addEventListener('mouseleave',()=>{
        setTimeout(()=>{
            center.style.background='transparent';
            center.innerHTML=""
        }
        ,1000)
        
    })
}
magic(red,1,getColor(red))
magic(cyan,2,getColor(cyan))
magic(violet,3,getColor(violet))
magic(orange,4,getColor(orange))
magic(pink,5,getColor(pink))

