const slide = document.querySelectorAll("#sliding")
let counter = 0;
    
slide.forEach((slide,index)=>{
slide.style.left = `${index * 100}%`
})

const gonext = () =>{
    counter++
    slidesimages()
}
const goprv = () =>{
    counter--
    slidesimages()
}
const slidesimages = () => {
    slide.forEach((slide,i)=>{
        if(i==0){
slide.style.transform = `translate(-${counter * 0}%)`
     }
        else{
slide.style.transform = `translate(-${counter * 100}%)`

        }
    })
}



