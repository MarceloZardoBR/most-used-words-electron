module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace(/\[|\]|♪♪/, '').trim());

            resolver(words)
        } catch(e) {
            reject(e);
        }
    })
}

const filterValidRow = (row) =>{
    const notNumber = !parseInt(row.trim());
    //o dupla '!!' transforma o valor em boolean
    const notEmpty = !!row.trim();
    const notInterval = !row.includes('-->');
    return notNumber && notEmpty && notInterval;
}

const removePunctuation = (row) =>{
    return row.replace(/[,?!.-]/g, '')
}
const removeTags = row => row.replace(/(<[^>]+)>/ig,'').trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`;