class Vec { //create Vec class
   constructor (x,y,){ //create constructor that takes two arguments x and y
      this.x = x; // assign these arguments to it's properties of the same names
      this.y = y;
   }

   plus(vector){ //create  plus method for the prototype
      return new Vec(this.x + vector.x, this.y + vector.y);
   }

   minus(vector){ //create the minus method for the prototype
      return new Vec(this.x - vector.x, this.y - vector.y);
   }
   get length(){ //create getter method (property) to compute length of input vector
      return Math.sqrt(Math.pow(this.x,2) + (Math.pow(this.y,2)))
   }
}

/* 
Sample method calls:
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

Issue-1:
Method calls return 'undefined' when called from chrome dev tools console */