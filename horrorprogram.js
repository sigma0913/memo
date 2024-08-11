let now = 0;
let max = 0;

const dot = (arg) => {
now = 0;
    while(now < arg){
        window.alert('...');
        now++;
    };
};

const air = (arg) => {
document.getElementsByTagName('li')[arg].textContent = '';
}

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    max++;
    dot(max);
    air(max-1);
});