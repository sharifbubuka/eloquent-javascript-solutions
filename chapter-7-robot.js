/*
A Robot: A program that performs a task in a virtual world i.e. a mail delivery robot that picks
up and drops off parcels.
*/

// Meadowfield is a small village consisting of 11 places with 14 roads between them.
const roads = [
   "Alice's House-Bob's House", "Alice's House-Cabin",
   "Alice's House-Post Office", "Bob's House-Town Hall",
   "Daria's House-Ernies's House", "Daria's House-Town Hall",
   "Ernie's House-Grete's House", "Grete's House-Farm",
   "Grete's House-Shop", "Marketplace-Farm",
   "Marketplace-Post Office", "Marketplace-Shop",
   "Marketplace-Town Hall", "Shop-Town Hall"
];

// Convert the list of roads to a data structure that for each place, tells us what can be
//reached from there
function  buildGraph(edges){
   // from page 117: this creates an abject with no prototype, which can safely be used as a map.
   let graph = Object.create(null);
   function addEdge(from, to){ //this creates the individual roads
      if(graph[from]){ // if the graph map has the key 'from'
         graph[from] = [to]; //the value of to is assigned to the value 'from'
      } else {
         graph[from].push[to]; //add the value of 'to' to the end of from
      }
   }
   for(let [from, to] of edges.map(r => r.split("-"))){ //this creates multiple two-index arrays i.e
   //to and from
      addEdge(from, to);
      addEdge(to, from);
   }
   return graph;
}
const roadGraph = buildGraph(roads); //buildGraph function takes the roads array as a parameter

class VillageState {
   constructor(place, parcels){
      this.place = place;
      this.parcels = parcels;
   }
   move(destination){
      if(!roadGrapgh[this.place].includes(destination)){ //checks whether there is a road from current
      //place to the destination 
         return this; 
      } else { //else returns the old state
         let parcels = this.parcels.map(p => {
            if(p.place != this.place) return p;
            return {place: destination, address: p.address};
         }).filter(p => p.place != p.address);
         return new VillageState(destination, parcels); // then returns new state with  destination 
         //as the robot's new place 
      }
   }
}
let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);