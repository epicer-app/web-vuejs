const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);

export const decimalToFraction = (decimal: number): string => {
    let whole = 0;
    let numerator = (decimal * 100);
    if (numerator >= 100) {
        whole = Math.floor(numerator / 100);
        numerator = Math.floor(numerator % 100);
    }
    if (numerator === 0) {
        return `${whole}`;
    }
    let result = whole > 0 ? `${whole} ` : '';
    if (numerator === 33) {
        result = `${result}1/3`;
    } else if (numerator === 66) {
        result = `${result}2/3`;
    } else if (numerator === 99) {
        numerator = 1;
    } else {
        const x = gcd(numerator, 100);
        const n = (numerator / x);
        const d = (100 / x);
        result = `${result} ${n}/${d}`;
    }
    return result;
};
