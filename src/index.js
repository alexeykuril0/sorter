class Sorter {
  constructor() {
    // your implementation
    this.array = []; 
this.compatator = (a,b) => a-b; 
  }

  add(element) {
    // your implementation
    this.array.push(element); 
  }

  at(index) {
    // your implementation
    return this.array[index]; 
  }

  get length() {
    // your implementation
    return this.array.length; 
 
  }

  toArray() {
    // your implementation
    return this.array; 
  }

  sort(indices) {
    // your implementation
    indices.sort(); 
if(indices.length == 1) return this.array; 
let arr = []; 
for(let i = 0; i<indices.length; i++){ 
arr.push(this.array[indices[i]]); 
} 
arr.sort(this.compatator); 
for(let i = 0; i<indices.length; i++){ 
this.array[indices[i]] = arr[i]; 
} 
  }

  setComparator(compareFunction) {
    // your implementation
    this.compatator = compareFunction; 
  }
}

module.exports = Sorter;