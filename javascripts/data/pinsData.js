const loadPinsForBoard = (boardId) => {
    return new Promise((resolve, reject) => {
        $.get('../db/pins.json') 
            .done((data) => {
                const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId) // cleaning the data somewhat before you resolve it - 1 line if else statement
                // "pin" is the same as the current index of the array that I'm looping over ; pin.board is in json ; 
                resolve(pinsForBoards); // lines 34 - 37 in pins.js
            })
            .fail((error) => {
                reject(error);
            })
    })
}

const loadPinsOnBoards = (boards) => {
    return new Promise((resolve, reject) => {
        $.get('../db/pins.json')
            .done((data) => {
                // boards = [{id: 1, name: cool, },{id: 2, name: cool, }]
                const boardsWithPins = boards.map(board => {
                    // board = {id: 1, name: cool, }
                    const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
                                                            // pin = { board_id: 1, title: "cool title"}
                    board.pins = matchingPins; // board is still like the current index of array just like on line 19 ; we're creating a new property called pins because board is an object /
                    // board =  {id: 1, name: cool, pins: [{ board_id: 1, title: "cool title"}]}
                    return board; // if you don't return out of a MAP method you'll just have an empty array
                })
                //
                resolve(boardsWithPins); // data is cleaned
            })
            .fail((error) => {
                reject('error loadPinsOnBoards', error);
            })
    })
}

export {loadPinsForBoard};
export {loadPinsOnBoards};