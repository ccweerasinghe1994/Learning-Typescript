# [HOME PAGE](../README.MD)
- [HOME PAGE](#home-page)
  - [CHAPTER 02 The Type System](#chapter-02-the-type-system)
    - [What’s in a Type?](#whats-in-a-type)
      - [Type Systems](#type-systems)
      - [Kinds of Errors](#kinds-of-errors)
    - [Assignability](#assignability)
      - [Understanding Assignability Errors](#understanding-assignability-errors)
    - [Type Annotations](#type-annotations)
      - [Unnecessary Type Annotations](#unnecessary-type-annotations)
    - [Type Shapes](#type-shapes)
      - [Modules](#modules)
    - [Summary](#summary)

## CHAPTER 02 The Type System

*JavaScript’s power
Comes from flexibility
Be careful with that!*


### What’s in a Type?
A “type” is a description of what a JavaScript value shape might be. By “shape” I mean
which properties and methods exist on a value, and what the built-in typeof operator
would describe it as.

For example, when you create a variable with the initial value "Aretha":

```js 
let singer = "Aretha";
 ```
TypeScript can infer, or figure out, that the singer variable is of type string.

The most basic types in TypeScript correspond to the seven basic kinds of primitives
in JavaScript:

- null
- undefined
- boolean // true or false
- string // "", "Hi!", "abc123", …
- number // 0, 2.1, -4, …
- bigint // 0n, 2n, -4n, …
- symbol // Symbol(), Symbol("hi"), …

For each of these values, TypeScript understands the type of the value to be one of the
seven basic primitives:

- null; // null
- undefined; // undefined
- true; // boolean
- "Louise"; // string
- 1337; // number
- 1337n; // bigint
- Symbol("Franklin"); // symbol

If you ever forget the name of a primitive, you can type a let variable with a
primitive value into the TypeScript Playground or an IDE and hover your mouse over
the variable’s name. The resultant popover will include the name of the primitive,
such as this screenshot showing hovering over a string variable

```ts 
let singer:string = "Aertha";
 ```
TypeScript is also smart enough to be able to infer the type of a variable whose starting
value is computed. In this example, TypeScript knows that the ternary expression
always results in a string, so the bestSong variable is a string:

```ts 
let bestSong = Math.random() > 0.5 ? "chain of Fools" : "respect";
```

Back in the TypeScript Playground or your IDE, try hovering your cursor on that
bestSong variable. You should see some info box or message telling you that Type‐
Script has inferred the bestSong variable to be type string

*Recall the differences between objects and primitives in JavaScript:
classes such as Boolean and Number wrap around their primitive
equivalents. TypeScript best practice is generally to refer to the
lower-case names, such as boolean and number, respectively.*
#### Type Systems
#### Kinds of Errors
### Assignability
#### Understanding Assignability Errors
### Type Annotations
#### Unnecessary Type Annotations
### Type Shapes
#### Modules
### Summary