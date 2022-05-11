
let parent = document.getElementById("main");
const container = document.querySelectorAll("img.img-gallery");
let  screen = document.getElementById("screeen");
let left_arrow = document.getElementById("left-arrow");
let right_arrow = document.getElementById("right-arrow");
let image = document.getElementById("image");
let label = document.getElementById("label");
let slides = document.getElementsByClassName("slides");
let exit = document.getElementById("exit");
let outside =false;
let index =0; 
let image2;

    // تعریف رویداد برای تمامی عکس های کوچک صفحه
    for(let i =0;i<container.length;i++){
        container[i].addEventListener('click',getindex);
    }

    //تعریف تابع برای کلیک اول
function getindex(event){
let co = document.getElementById("screeen");
    if(!co.contains(event.target) && !this.contains(event.target)){
        screen.style.visibility="hidden";  
    }
    image2 = this;

outside =false;
//دریافت مقدار ایندکس عکس که خودمان بهش دادیم
index = event.target.dataset.input;
//قابل نمایش کردن صفحه پاپ آپ اسلایدشو
screen.style.visibility="visible";
//غیر نمایش کردن تمامی عکس های بزرگ پاپ آپ به جز عکسی که روی آن کلیک شده
for(let i =0;i<slides.length;i++){
    if(i==index){
        slides[index].style.display="block";
        continue;
    }
    slides[i].style.display="none";
}
//دریافت مقدار alt عکس برای نمایش در پایین
label.textContent=this.alt;
//تعیین میزان شفافیت
screen.style.opacity =1;
}



left_arrow.addEventListener('click',()=>{
    //اگر ایندکس به صفر رسید و کاربر دکمه عقب را زد اندیکس روی آخرین عنصر تنظیم شود
if(index==0){
    index=5;
}
else{
    //اگر آخرین عنصر نبود یکی به عقب برگردد
    index=Number(index)- 1;
}
//غیر نمایش کردن تمامی عکس های بزرگ پاپ آپ به جز عکسی که روی آن کلیک شده
for(let i =0;i<slides.length;i++){
    if(i==index){
        slides[index].style.display="block";
        continue;
    }
    slides[i].style.display="none";
}

//دریافت مقدار alt عکس برای نمایش در پایین
label.textContent =slides[index].alt;

});


right_arrow.addEventListener('click',()=>{
  
        //اگر ایندکس به آخر رسید و کاربر دکمه جلو را زد اندیکس روی اولین عنصر تنظیم شود
    if(index==5){
        index=0;
    }
    else{

        //اگر اولین عنصر نبود یکی به جلو برود
        index=Number(index)+ 1;

    }

    //غیر نمایش کردن تمامی عکس های بزرگ پاپ آپ به جز عکسی که روی آن کلیک شده
    for(let i =0;i<slides.length;i++){
        if(i==index){
            slides[index].style.display="block";
            continue;
        }
        slides[i].style.display="none";
    }
    //دریافت مقدار alt عکس برای نمایش در پایین
    label.textContent =slides[index].alt;

});

exit.addEventListener('click',()=>{

    // screen.classList.add("hide");
    // left_arrow.style.visibility="hidden";
    // right_arrow.style.visibility="hidden";
    // label.style.visibility="hidden";
    // exit.style.visibility="hidden";
    


});

document.addEventListener('click' ,function(event){
    let co = document.getElementById("screeen");
    if(!co.contains(event.target) && !image2.contains(event.target) || exit.contains(event.target)){
       //  screen.style.visibility="hidden";  
        screen.classList.add("hide");
        left_arrow.style.visibility="hidden";
        right_arrow.style.visibility="hidden";
        label.style.visibility="hidden";
        exit.style.visibility="hidden";
        
    }
    else{
        screen.classList.remove("hide");
      setTimeout(() => {
        left_arrow.style.visibility="visible";
        right_arrow.style.visibility="visible";
        label.style.visibility="visible";
        exit.style.visibility="visible";    
      }, 1500);
            
        
        
    }
//    const {target}=event;
//    outside = true;
//    if(screen.contains(target)!==true && outside==false){
//       screen.style.visibility="hidden";
//    }
});
