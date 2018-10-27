import {loadPinsForBoard} from '../data/pinsData.js'; 

const shortenLink = (full_url) => {
    const hostname = new URL(full_url).hostname;
    return hostname;
}

const bindEvents = () => {
    $('#toBoardsBtn').click(() => {
        $('#pins-page').hide();
        $('#boards-page').show();
    })
}

const writePins = (pins) => {
    let domString = '';
    pins.forEach(pin => {
        domString += `
            <div id="${pin.id}" class="pcard pin-card align-self-start p-2">
                <img class="card-img-top" src="${pin.image_url}">
                <a href="${pin.link}" target="_blank" class="p-2">
                <button type="button" class="btn btn-light">${shortenLink(pin.link)}</button>
                </a>
            </div>
        `
    })
    $('#pins-on-board').html(domString);
}

// Will supposedly use multiple times - Lauren

const initialPinView = (boardId) => { // from line 11 in boards.js
    loadPinsForBoard(boardId) // line 11 in boards.js
    .then(data => {
        writePins(data);
        bindEvents(); // Click Event
    })
    .catch(error => {
        console.log('things messed up in pins', error);
    });
}

export {initialPinView};