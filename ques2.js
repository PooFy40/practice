function findMinMax(array){  
    let minValue = Infinity
    let maxValue = -Infinity
    for (item of array) {
        if (item < minValue)
            minValue = item
        if (item > maxValue)
            maxValue = item
        }
    console.log("MAXIMUM VALES IS "+maxValue)
    console.log("MINIMUM VALES IS "+minValue)
}


let arr = [8, 22, 4, 15, 9]
findMinMax(arr)
