const chai = window.chai;
const expect = chai.expect;

describe("Random Number Intervals", () => {
  it("Intervals should be 1 and 100", () => {
    expect(arrayofIntervals).to.deep.equal([1, 100]);
  });
  it("Intervals should not be 9 and 20", () => {
    expect(arrayofIntervals).to.not.equal([9, 20]);
  });

});
