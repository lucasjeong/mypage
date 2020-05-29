const sbtn = document.querySelector('#startt');
const rbtn = document.querySelector('#resett');

let timeInput = 0;

let timerFunction = function(){
    let min = document.querySelector('#m_timer').value;
    let sec = document.querySelector('#s_timer').value;
    timeInput = 60*Number(min) + Number(sec);

    timeInput = timeInput--;

    let min2 = Math.floor(timeInput/60);
    let sec2 = timeInput%60;

    if(min2<10) min2 = '0' + min2;
    if(sec2<10) sec2 = '0' + sec2;
    let timeleft = min2 + ':' + sec2;

    let timeshow = document.querySelector('#w_timer h1');
    timeshow.textContent = timeleft;
}

let b;
sbtn.onclick = function(){
    let currState = document.querySelector('#startt').textContent;
    if(currState === 'start'){
        document.querySelector('#startt').textContent = 'stop';
        b = setInterval(timerFunction, 1000);
    } else {
        document.querySelector('#startt').textContent = 'start';
        clearInterval(b);
    }
    if(timeInput = 0){
        clearInterval(b);
        document.querySelector('#w_timer h1').textContent="ALERT";
    }
}

rbtn.onclick = function(){
    min = 0;
    sec = 0;
    let timeshow = document.querySelector('#w_timer h1');
    timeshow.textContent = '00:00';
}