//**  Prototypal inheritance
// var parent = {
//   value: "parentValue",
//   // Object property
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("walking!");
//   }
// };
//
// var child = Object.create(parent); // parent object is now the prototype for the child object
// // each of thes lines reutrns the coresponding value names and data in each location
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// // Declare our own value property on the child object
// //child.value property is masking the parent property
// child.value = "childValue";
// // Change the value
// child.obj.objValue = "childObjValue";
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// // The parent.obj.objValue should be equal to the child.obj.objValue
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// // Verification
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
//
// //Here, our prototype will be the child
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// //This line calls the walk function ^
// grandChild.walk();

//** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
//When the function name begins with a capitilized letter, this indicates that it is actually a function constructor.
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog: ", myDog);

// Not being used as a function constructor
Dog("Max2");
