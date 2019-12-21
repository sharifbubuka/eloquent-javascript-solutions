class Group { //create class Group
   constructor() { //create constructor
      this.list = []; //constructor creates a new group
      //Note: an Array is used as an improvisor since a Set won't be
      //created directly.
   }
   add(element){ //create add prototype method
      if(!this.list.has(element)) this.list.push(element);
   }
   delete(element){ //create delete prototype method
      if(this.list.has(element)) this.list.splice(this.list.indexOf(element),1);
   }
   has(element){ //create has prototype method
      return this.list.indexOf(element) !== -1;
   }
   static from(iterable) { //create static prototype from method that takes an iterable object
      let output = new outGroup(); //a new group is created
      for (const member of iterable){ //for each variable of iterable
         output.add(element); //add variable to new group
      }
      return output; //return new group
   }
   [Symbol.iterator]() { //create a symbol to 
      return new GroupIterator(this); //returns an instance of GroupIterator
   }
}

class GroupIterator { //create the GroupIterator class
   constructor(group) { //create it's constructor
      this.i = 0; //assign 0 to it's i variable (Number)
      this.group = group; //assign the group to it's group variable
   }
   next(){ //create it's prototype next method
      if(this.i === this.group.list.length) return {done: true}; 
      const result = {value: this.group.list[this.i], done: false};
      this.i++;
      return result;
   }
}

