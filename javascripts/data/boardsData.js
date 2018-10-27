const loadBoards = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/boards.json') // API will eventually go here I think
        .done((data) => {
            console.log(data);
            resolve(data.boards); // .then // making the data clean // resolving means the data is good to go
        })
        .fail((error) => { // only 400 or 500 errors 
            reject(error); // .catch
        })
    });
}

export {loadBoards}