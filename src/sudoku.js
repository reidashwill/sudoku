export function Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.row4 = row4;
  this.row5 = row5;
  this.row6 = row6;
  this.row7 = row7;
  this.row8 = row8;
  this.row9 = row9;
}

Sudoku.prototype.checkRepeat = function () {
  var newString = (this.row1).split("");
  if (newString.sort().join("") === "123456789") {
    return true;
  };
  return false;
};

