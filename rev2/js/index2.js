


var containerBox =document.getElementById('containerBox')
var imgBox =document.getElementById('imgBox')
var imagesList=Array.from(document.querySelectorAll('.col-md-4 img'))
var praveBtn =document.getElementById('praveBtn')
var closeBtn =document.getElementById('closeBtn')
var nextBtn =document.getElementById('nextBtn')
var  currentIndex;

for(var i=0 ; i<imagesList.length;i++)
imagesList[i].addEventListener('click',function(e){
    containerBox.classList.remove('d-none')
    currentIndex=imagesList.indexOf(e.target)
    var currentImgSrc =e.target.getAttribute('src')
    imgBox.style.backgroundImage=`url(${currentImgSrc})`

})





function nextSlide(){
    currentIndex++
    currentIndex >= imagesList.length?currentIndex=0:''
    console.log(imagesList[currentIndex].getAttribute('src'));
    var newImgSrc=imagesList[currentIndex].getAttribute('src')
    imgBox.style.backgroundImage =`url(${newImgSrc})`
}
nextBtn.addEventListener('click',nextSlide)



function praveSlide(){
    currentIndex--
    if(currentIndex==0){
        
        currentIndex= imagesList.length -1
    }
    console.log(imagesList[currentIndex].getAttribute('src'));
    var newImgSrc=imagesList[currentIndex].getAttribute('src')
    imgBox.style.backgroundImage=`url(${newImgSrc})`
}
praveBtn.addEventListener('click',praveSlide)





function closeSlide(){
    containerBox.classList.add('d-none')
}
closeBtn.addEventListener('click',closeSlide)
