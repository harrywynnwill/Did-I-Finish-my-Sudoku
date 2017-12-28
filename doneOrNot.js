const doneOrNot = (sudokoGrid) => {
    return getGridTotal(sudokoGrid) === 81 &&
        getGridTotal(transpose(sudokoGrid)) === 81 &&
        getGridTotal(getCubes(sudokoGrid)) === 81
}

const getGridTotal = (sudokoGrid) => {
    return sudokoGrid.map(row => new Set(row))
        .map(x => x.size)
        .reduce((x, y) => x + y)
}

const transpose = (sudokoGrid) => {
    return sudokoGrid.map((col, i) => sudokoGrid.map(row => row[i]))
}

const getCubes = (sudokoGrid) => {
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

    let i, j, cubesNew = [], chunk = 9;
    for (i = 0, j = cubes.length; i < j; i += chunk) {
        cubesNew.push(cubes.slice(i, i + chunk));
    }
    return cubesNew
}


module.exports = {
    doneOrNot: doneOrNot,
    getGridTotal: getGridTotal,
    transpose: transpose,
    getCubes: getCubes
}
