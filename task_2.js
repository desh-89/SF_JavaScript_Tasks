const obj = {1: 1, second: 2, '': 3, abc: 4, new: 5,};
let str = "new";

const str_in_obj = (a, b) => {
  for (let key in a) {
    if (key == b) {
        return true;
    }
  }
  return false;
}

let result = str_in_obj(obj, str);
console.log(result);
