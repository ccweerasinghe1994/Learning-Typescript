var researcher = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;
if (typeof researcher === 'string') {
    researcher.toUpperCase();
}
// Logical negations from ! and else statements work as well:
if (!(typeof researcher === 'string')) {
    researcher.toFixed();
}
else {
    researcher.toUpperCase();
}
//Those code snippets can be rewritten with a ternary statement, which is also sup‐
// ported for type narrowing:
typeof researcher === 'string' ? researcher.toUpperCase() : researcher.toFixed();
