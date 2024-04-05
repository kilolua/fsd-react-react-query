export function getWordForm(number: number, wordForms: string[]) {
    number = Math.abs(number) % 100;
    const n1 = number % 10;
    if (number > 10 && number < 20) return wordForms[2];
    if (n1 > 1 && n1 < 5) return wordForms[1];
    if (n1 == 1) return wordForms[0];
    return wordForms[2];
}