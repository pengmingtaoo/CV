let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*hello,我叫peng,是一名前端工程师
接下来我要展示我的前端功底了
我要添加一个DIV
*/
#div1{
   border:1px solid red;
   width:200px;
   height:200px;
}
/*
接下来我要把div变成一个八卦圆
注意看好了
首先我要把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是一阴一阳
一黑一白形成
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
加两个风火轮
*/
#div1::before{
    display:block;
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    display:block;
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;
let string2 = '';

let n = -1;

let step = () => { 
    setTimeout(() => {
        n = n + 1;
        
        if (string[n] === '\n') {
            //如果是回车，就不照搬
            string2 += '<br>';
        } else {
            //如果不回车，就照搬
            string2 += string[n];
        } if(string[n] === ' ') { 
            string2 +='&nbsp';
        }
        //string2 += string[n] === '\n' ? '<br>' : string[n];

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 999999);
        html.scrollTo(0, 999999);
        if (n + 1 < string.length) {
            step();
        }
    }, 50);
}
step();

