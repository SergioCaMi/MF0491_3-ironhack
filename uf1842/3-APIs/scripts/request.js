async function getPuzzle(wordCount) {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    const hiddenSentence = await response.json();
    return hiddenSentence.puzzle;

}



