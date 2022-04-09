import {intervalToDuration} from 'date-fns';
import {storageDate} from './storage.js';
import {UI_ELEMENTS, createTime} from './view.js';

let timerId;

export function getTime(chosenDate) {
    const interval = intervalToDuration({
        start: new Date(),
        end: new Date(chosenDate)
    });
    
    localStorage.setItem('date', chosenDate);
    
    return interval;
}

function updateTime(chosenDate) {
    clearInterval(timerId);

    timerId = setInterval(() => {
        createTime(chosenDate)
    }, 1000);
}

function showTime(event) {
    updateTime(UI_ELEMENTS.INPUT.value);

    event.preventDefault();
}

function showTimeFromStorage() {
    UI_ELEMENTS.INPUT.value = storageDate;
    updateTime(storageDate);
}

UI_ELEMENTS.SUBMIT.addEventListener('click', showTime);
showTimeFromStorage();