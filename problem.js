
const arrayofIntervals = [1, 100]
function randomIntFromInterval(arrayofIntervals) { // min and max included 
    return Math.floor(Math.random() * (arrayofIntervals[1] - arrayofIntervals[0] + 1) + arrayofIntervals[0])
  }
