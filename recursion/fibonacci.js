function fibs(num) {
    let sequence = [0, 1]
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[sequence.length -2] + sequence[sequence.length -1])
    }
    return sequence
}