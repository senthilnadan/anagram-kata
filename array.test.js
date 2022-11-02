import arraySplit from "./arraySplit.js";
const oddArray = [1, 3, 5, 7, 9, 11, 13];

test("should start correctly", () => {
  expect(oddArray).toEqual(expect.arrayContaining([1, 3, 5, 7, 9]));
});

const bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

test("should start correctly", () => {
  let result = arraySplit(bigArray, 2);
  let expectedResult = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 14],
  ];
  for (let a = 0; a < result.length; a++)
    expect(result[a]).toEqual(expect.arrayContaining(expectedResult[a]));
});
