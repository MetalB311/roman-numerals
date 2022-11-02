function romeIt(num) {
    let currNum = num
    let romeNum = ''
    while (currNum > 0) {
        if (currNum - 1000 >= 0) {
            romeNum += 'M'
            currNum -= 1000
        } else if (currNum - 500 >= 0) {
            romeNum += 'D'
            currNum -= 500
        } else if (currNum - 100 >= 0) {
            romeNum += 'C'
            currNum -= 100
        } else if (currNum - 50 >= 0) {
            romeNum += 'L'
            currNum -= 50
        } else if (currNum - 10 >= 0) {
            romeNum += 'X'
            currNum -= 10
        } else if (currNum - 5 >= 0) {
            romeNum += 'V'
            currNum -= 5
        } else if (currNum - 1 >= 0) {
            romeNum += 'I'
            currNum -= 1
        }
    }
    return romeNum
}
console.log(romeIt(69))