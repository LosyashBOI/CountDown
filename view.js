import {getTime} from "./main.js";

export const UI_ELEMENTS = {
    INPUT: document.querySelector('.date-counter__input'),
    SUBMIT: document.querySelector('.date-counter__submit'),

    OUTPUT_YEARS: document.querySelector('.output-years'),
    OUTPUT_DAYS: document.querySelector('.output-days'),
    OUTPUT_HOURS: document.querySelector('.output-hours'),
};

export function createTime(chosenDate) {
    UI_ELEMENTS.OUTPUT_YEARS.textContent = getTime(chosenDate).years;
    UI_ELEMENTS.OUTPUT_DAYS.textContent = getTime(chosenDate).days;
    UI_ELEMENTS.OUTPUT_HOURS.textContent = getTime(chosenDate).hours; 
}