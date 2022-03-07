/**
 * Shuffle an array contents.
 *
 * @param {*} array
 * @see https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
 */
const shuffle = array => {
    let curId = array.length;

    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;

        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }

    return array;
};

module.exports = {
    shuffle
};
