let myAPP = {
    inputField: document.querySelector('.inputField'),
    inputSubmit: document.querySelector('.inputSubmit'),
    ul: document.querySelector('.place'),
    cnt: 0,
};

myAPP.inputSubmit.addEventListener('click', () => {
    let text = myAPP.inputField.value;
    myAPP.inputField.value = '';
    let li = document.createElement('li');
    myAPP.cnt += 1;
    li.textContent = "在第 " +  myAPP.cnt + " 次输入了: " + text;
    myAPP.ul.appendChild(li);
});
