import { monthToYears } from './month-to-years';

describe('monthToYears', () => {
  describe('when input is empty', () => {
    it('returns the input', () => {
      expect(monthToYears(undefined)).toBeUndefined();
      // tslint:disable-next-line:no-null-keyword
      expect(monthToYears(null)).toBeNull();
    });
  });
  [
    { input: 0, output: { nbMonths: 0, nbYears: 0 } },
    { input: 1, output: { nbMonths: 1, nbYears: 0 } },
    { input: 11, output: { nbMonths: 11, nbYears: 0 } },
    { input: 12, output: { nbMonths: 0, nbYears: 1 } },
    { input: 13, output: { nbMonths: 1, nbYears: 1 } },
    { input: 240, output: { nbMonths: 0, nbYears: 20 } }
  ].forEach(({ input, output }) => {
    describe(`when input is ${input}`, () => {
      it(`returns a ${output.nbMonths} month / ${output.nbYears} year object`, () => {
        expect(monthToYears(input)).toEqual(output);
      });
    });
  });
});
