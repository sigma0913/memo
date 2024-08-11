let now = 0;
let max = 0;

const dot = (arg) => {
now = 0;
    while(now < arg){
        window.alert('...');
        now++;
    };
};

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    max++;
    dot(max);
});