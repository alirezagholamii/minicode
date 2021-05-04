let input = document.querySelector('#input');
let result = document.querySelector('#result');
const TurboFront = 'TurboFront'


input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (findingTurbo(value)) {
        result.innerHTML = 'YES'
    } else {
        result.innerHTML = 'NO'
    }
})




const findingTurbo = (searchedWord) => {
    return searchedWord && (searchedWord.length <= TurboFront.length) && (TurboFront + TurboFront).includes(searchedWord)
}
