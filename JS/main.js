window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}

var section = 'beavers';
var lastSection = 'beavers';

function changeSection(whichSection) {
    lastSection = section;
    section = whichSection;
    console.log(section);
    console.log(lastSection);
    setActiveSection(whichSection, lastSection);
};

function setActiveSection(sectionName, lastSectionName) {
    if (lastSectionName != null) {
        var el = document.getElementById(lastSectionName);
        el.classList.remove("active-section");
    }
    var element = document.getElementById(sectionName);
    element.classList.add("active-section");
};

function changePage(page) {
    console.log(section);
    var content = document.getElementById("main-content");
    content.innerHTML = `<object width="100%" height="100%" type="text/html" data="../Pages/${section}/${page}.html"></object>`;
    content.classList.add("pageUp");
};

function sectionPage() {
    var content = document.getElementById("main-content");
    content.classList.remove("pageUp");
}