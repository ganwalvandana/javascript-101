
const setWatch = document.getElementById('watch');


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    setWatch.innerHTML = date.toLocaleTimeString();

},1000)

// setInterval(function(){
//    setWatch.innerHTML = Math.floor(new Date().getTime()/1000.0)
// },1000);