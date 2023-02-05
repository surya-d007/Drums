
    document.querySelectorAll("button")[0].addEventListener("click",function add(){
        var sudioo = new Audio("sounds/crash.mp3");
        sudioo.play();});
            document.querySelectorAll("button")[1].addEventListener("click",function add(){
            var sudioo = new Audio("sounds/tom-1.mp3");
            sudioo.play();});
            document.querySelectorAll("button")[2].addEventListener("click",function add(){
            var sudioo = new Audio("sounds/tom-2.mp3");
            sudioo.play();});
            document.querySelectorAll("button")[3].addEventListener("click",function add(){
            var sudioo = new Audio("sounds/kick-bass.mp3");
            sudioo.play();});
            document.querySelectorAll("button")[4].addEventListener("click",function add(){
            var sudioo = new Audio("sounds/tom-3.mp3");
            sudioo.play();});
            document.querySelectorAll("button")[5].addEventListener("click",function add(){
            var sudioo = new Audio("sounds/tom-4.mp3");
            sudioo.play();});
    

    document.body.addEventListener("keypress",function call(event){
            playsound(event.key);
        });





function playsound(key)
{
    switch (key){
    case "w":
        var sudioo = new Audio("sounds/crash.mp3");
        sudioo.play();
        break;

    case "e":
            var sudioo = new Audio("sounds/tom-1.mp3");
            sudioo.play();
            break;

    case "t":
        var sudioo = new Audio("sounds/tom-2.mp3");
        sudioo.play();
        break;
    
    case "i":
            var sudioo = new Audio("sounds/kick-bass.mp3");
            sudioo.play();
            break;
        
    case "o":
                var sudioo = new Audio("sounds/tom-3.mp3");
                sudioo.play();
                break;

    case "n":
                    var sudioo = new Audio("sounds/tom-4.mp3");
                    sudioo.play();
                    break;
    }
                
            
}






   
    
                           
