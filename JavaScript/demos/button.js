let myAPP = {
    cnt: 0,
    ul: document.querySelector('.place'),
    button: document.querySelector('.addnum')
};
// 这里的 () => 是箭头函数，和 function () 的匿名函数类似，只是更短一点
myAPP.button.addEventListener('click', () => {
    let li = document.createElement('li');
    myAPP.cnt += 1;
    li.textContent = "点击了 " + myAPP.cnt + " 次";
    myAPP.ul.appendChild(li);
});