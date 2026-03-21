const trim = (str) => str.trim();
const lowerCase = (str) => str.toLowerCase();
const makeFistLetterCaps = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const composite = (...args) => {
  return (x) => {
    return args.reduceRight((acc, fn) => fn(acc), x);
  };
};

const result = composite(makeFistLetterCaps, lowerCase, trim)("   SUNIL  ");

console.log(result);
