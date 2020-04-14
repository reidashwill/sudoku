import { Sudoku } from './../src/Sudoku.js';

describe('Sudoku', () => {

  test('Should correctly create a sudoku object with 9 arrays of 9 numbers ', () => {
    var sudoku = new Sudoku([1, 2, 3, 4, 5, 6, 7, 8, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.row1.length).toEqual(9);
    expect(sudoku.row2.length).toEqual(9);
    expect(sudoku.row3.length).toEqual(9);
    expect(sudoku.row4.length).toEqual(9);
    expect(sudoku.row5.length).toEqual(9);
    expect(sudoku.row6.length).toEqual(9);
    expect(sudoku.row7.length).toEqual(9);
    expect(sudoku.row8.length).toEqual(9);
    expect(sudoku.row9.length).toEqual(9);
  });

  test('should verify that the first row does not contian any repeated numbers', () => {
    var sudoku = new Sudoku("122456789");
    expect(sudoku.checkRepeat()).toEqual(true);
  })
});