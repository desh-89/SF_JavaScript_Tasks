const obj = {1: 1, second: 2, '': 3, abc: 4, new: 5,};

const printLogHasOwnObject = (a) => {
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
        console.log(key);
    }
  }
}

printLogHasOwnObject(obj);
