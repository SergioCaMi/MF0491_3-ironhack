async function getPuzzle(wordCount) {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    const hiddenSentence = await response.json();
    console.log("Palabra: " + hiddenSentence.puzzle);
    return hiddenSentence.puzzle;

}



