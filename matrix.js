class Matrix {
  constructor(Mstring) {
    this.Mstring = Mstring;
  }

  row () {
    let rowsAsStrings = [];
    let rows = [];

    let arrayOfStrings = this.Mstring.split(/[\n ]+/);
    let arrayOfInts = arrayOfStrings.map(function(element) { return parseInt(element); } );

    console.log("Array of string", arrayOfStrings);
    console.log("Array of ints:", arrayOfInts);

  }

  col () {

  }
}

//test data
// let y = '1 2\n10 20';
// let a = '9 8 7\n19 18 17';
let b = '89 1903 3\n18 3 1\n9 4 800';
let x = new Matrix (b);
x.row()
