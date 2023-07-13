//Recursive fibonacci
function fibs(num) {
    if (num === 0) {
      return []
    } else if (num === 1) {
      return [0]
    } else if (num === 2) {
      return [0, 1]
    } else {
      const sequence = fibs(num - 1)
      sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1])
      return sequence
    }
  }