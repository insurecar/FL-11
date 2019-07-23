'use strict';
let rootNode = document.getElementById('root');
let maxLi = 10;
let codeOne = 13;
let codeTwo = 2;
let btn = document.querySelector('.but');
let addText = document.getElementById('actionText');
let addLi = document.querySelector('.todo-cat-list');
let dazzle = document.querySelector('.dazzle');
addText.addEventListener('input', () => {
    if (addText.value.trim !== null) {
        btn.classList.add('enabled')
    } else {
        btn.classList.remove('enabled');
    }
});
function checkLI() {
    if (!addText.value.trim()) {
        return;
    }
    if (addLi.children.length < maxLi) {
        addLi.appendChild(addActionEl(addText.value));
        listenerItems();
        addText.value = '';
        btn.classList.remove('enabled');
    }
    if (addLi.children.length >= maxLi) {
        addText.disabled = true;
        dazzle.style.display = 'block';
    }
}
btn.addEventListener('click', checkLI);
addText.addEventListener(`keyup`, function(e) {
    if (e.keyCode === codeOne) {
        e.preventDefault();
        btn.click();
    }
});
let addActionEl = (text) => {
    let checkIcon = document.createElement('i');
    checkIcon.className = 'material-icons';
    checkIcon.textContent = 'check_box_outline_blank';
    let struckEl = document.createElement('i');
    struckEl.className = 'material-icons delete-color';
    struckEl.textContent = 'delete';
    let spanEl = document.createElement('span');
    spanEl.textContent = text;
    let penEl = document.createElement('i');
    penEl.className = 'material-icons delete-color create pen';
    penEl.textContent = 'create';
    let div = document.createElement('div');
    div.setAttribute('draggable', true);
    div.className = 'todo-action';
    div.appendChild(checkIcon);
    div.appendChild(spanEl);
    div.appendChild(penEl);
    div.appendChild(struckEl);
    return div;
}
addLi.addEventListener('click', (e) => {
    const target = e.target;
    if (target.textContent === 'check_box_outline_blank') {
        target.textContent = 'check_box';
        target.classList.add('checked');
    }
    if (target.textContent === 'delete') {
        target.parentElement.remove();
        checkLI();
        if (addLi.children.length <= maxLi) {
            dazzle.style.display = 'none';
        }
        if (addLi.children.length >= maxLi) {
            btn.classList.remove('disabled');
            addText.disabled = false;
            dazzle.hidden = true;
        }
    }
}, false);
function listenerItems() {
    let elemEdit = addLi.querySelectorAll('.create');
    for (let i = 0; i < elemEdit.length; i++) {
        elemEdit[i].addEventListener('click', editElement, false);

    }
}
function editElement() {
    let inputText = document.createElement('input');
    let elemSave = document.createElement('i');
    let wrapFieldSet = document.createElement('div');
    let mainFieldSet = this.parentElement;
    let mainElements = mainFieldSet.children;
    let span = mainFieldSet.querySelector('span');
    elemSave.classList.add('material-icons', 'delete-color');
    elemSave.textContent = 'save';
    inputText.type = 'text';
    inputText.value = span.textContent;
    changeClasses(mainElements, 'hide', false);
    mainFieldSet.appendChild(wrapFieldSet);
    wrapFieldSet.appendChild(inputText);
    wrapFieldSet.appendChild(elemSave);
    elemSave.addEventListener('click', () => {
        changeItem(inputText.value);
    }, false);
    function changeItem(value) {
        span.innerHTML = value;
        changeClasses(mainElements, 'hide', true);
        wrapFieldSet.remove();
    }
}
function changeClasses(data, className, removeClasses = false) {
    for (let i = 0; i < data.length; i++) {
        if (removeClasses) {
            data[i].classList.remove(className)
        } else {
            data[i].classList.add(className);
        }

    }
}
function actionTarget(event) {
    const target = event.target;
    if (target.hasAttribute('draggable')) {
        return target;
    } else if (target.tagName === 'I' || target.tagName === 'SPAN') {
        return target.parentElement;
    } else {
        return;
    }
}
let moveEl = null;
let dropEl = null;
addLi.addEventListener('dragstart', (e) => {
    moveEl = actionTarget(e);
    if (!moveEl) {
        return;
    }
    moveEl.style.opacity = '.7';
}, false);
addLi.addEventListener('dragend', () => {
    moveEl.style.opacity = '';
});
addLi.addEventListener('dragover', (e) => {
    e.preventDefault();
    let dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
});
addLi.addEventListener('dragleave', (e) => {
    let dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
});
addLi.addEventListener('drop', function(e) {
    dropEl = actionTarget(e);
    if (!dropEl) {
        return;
    }
    e.preventDefault();
    let rect = dropEl.getBoundingClientRect();
    let midline = rect.top + (rect.bottom - rect.top) / codeTwo;
    let afterDropEl = midline <= e.clientY ? dropEl.nextSibling : dropEl;
    addLi.insertBefore(moveEl, afterDropEl);
});