console.log(1)

// const a = 10;
// for(let i = 0; i < 9999999; i++) {
//     console.log(i);
// }

const getStatus = (isDoorClosed, isAlarmEnabled) => {   
    if (isDoorClosed === false && isAlarmEnabled === true) {
        return 'Alarm';
    }

    return 'ok';
}

const obj = {a: 123, b: 234};
console.log( obj['a'] );

const arr = [123, 345];
console.log( arr[1] );

let b = 10;
setTimeout(() => {
    let b = 20;
    console.log(b);
}, 1000);

setTimeout(() => {
    console.log(b);
}, 3000);

// alert();
console.log(3);

let a = 20;
setTimeout(() =>  {
    let a = 28;
    console.log(a);
}, 500);

console.log(b);

// const wrapEl = document.querySelector('.wraper');
// console.log(wrapEl.innerHTML);
// wrapEl.innerHTML = 'другой текст';
// wrapEl.style['background-color'] = '#cccccc';
// wrapEl.classList.remove('wraper');
// const img = document.querySelector('img');
// console.log(img.src);

const image = document.querySelector('.image');
setTimeout(()=>{
    image.classList.remove('image');
},3000);

setTimeout(()=>{
    image.classList.add('image_show');
},6000)