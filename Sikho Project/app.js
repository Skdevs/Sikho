// let data=document.querySelector('.deco');
// let data1=document.querySelector('.course-list ');
// data.addEventListener('click',()=>{
//       data1.style.opacity = 1;
      
// })
//Course button and course feature//
let data = document.querySelector(".nav-option");
let data1 = document.querySelector(".course-list")

data.addEventListener("click", function(event){
    if(event.target.outerText == "Courses"){
        data1.style.opacity =1;
    }
})
let data2 = document.querySelector(".course");
data2.addEventListener("mouseout", ()=>{
    data1.style.opacity =0;
})
// data.addEventListener("click", function(){
//     if(data1.style.opacity == 1){
//         data1.style.opacity =0;
//     }
// })



//Course button and course feature//
