const obj = {
  a: {
    b: {
      c: {
        name: "sunil",
      },
    },
  },
};

const objClone = structuredClone(obj);

const objCloneAlternative = JSON.parse(JSON.stringify(obj)); // this methos is not recommended as prototypes and keys which has undefiedn values are lost.
objClone.a.b.c.name = "Yadav";                               // So always use structuredClone function
objCloneAlternative.a.b.c.name = "Rahul";

console.log(
  "obj",
  JSON.stringify(obj),
  JSON.stringify(objClone),
  JSON.stringify(objCloneAlternative),
);
