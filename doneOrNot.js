const correctGridDimensions = 9 * 9

const doneOrNot = (sudokoGrid) => {
    return getGridTotal(sudokoGrid) === correctGridDimensions &&
        getGridTotal(transpose(sudokoGrid)) === correctGridDimensions &&
        getGridTotal(getRegions(sudokoGrid)) === correctGridDimensions ?
        'Finished!' : 'Try again!'
}

const getGridTotal = (sudokoGrid) => {
    return sudokoGrid.map(row => new Set(row))
        .map(row => row.size)
        .reduce((tempGrid, cell) => tempGrid + cell)
}

const transpose = (sudokoGrid) => {
    return sudokoGrid.map((col, i) => sudokoGrid.map(row => row[i]))
}

//TODO refactor this horror show
const getRegions = (sudokoGrid) => {
    let one = [];
    let two = [];
    let three = [];
    for (let i = 0; i < sudokoGrid.length; i++) {
        for (let j = 0; j < 3; j++) {
            one.push(sudokoGrid[i][j])
            two.push(sudokoGrid[i][j + 3])
            three.push(sudokoGrid[i][j + 6])
        }
    }
    let cubes = [...one, ...two, ...three]
    return createRegionsGrid(cubes)
}

const createRegionsGrid = (regions) => {
let i, j, cubesNew = [], chunk = 9;
    for (i = 0, j = regions.length; i < j; i += chunk) {
        cubesNew.push(regions.slice(i, i + chunk));
    }
    return cubesNew
}

module.exports = {
    doneOrNot: doneOrNot,
    getGridTotal: getGridTotal,
    transpose: transpose,
    getRegions: getRegions
}
