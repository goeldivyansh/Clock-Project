setInterval(function(){
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    hrotation = 30*hr + 0.5*min;
    mrotation = 6*min;
    srotation = 6*sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;



},1000)