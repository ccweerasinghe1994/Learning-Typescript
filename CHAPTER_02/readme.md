# [HOME PAGE](../README.MD)

- [HOME PAGE](#home-page)
  - [CHAPTER 02 The Type System](#chapter-02-the-type-system)
    - [What’s in a Type?](#whats-in-a-type)
      - [Type Systems](#type-systems)
      - [Kinds of Errors](#kinds-of-errors)
      - [Syntax errors](#syntax-errors)
      - [Type errors](#type-errors)
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

A type system is the set of rules for how a programming language understands what
types the constructs in a program may have.
At its core, TypeScript’s type system works by:

- Reading in your code and understanding all the types and values in existence
- For each value, seeing what type its initial declaration indicates it may contain
- For each value, seeing all the ways it’s used later on in code
- Complaining to the user if a value’s usage doesn’t match with its type

Let’s walk through this type inference process in detail.

Take the following snippet, in which TypeScript is emitting a type error about a
member property being erroneously called as a function:

```ts
let firstName = "Whitney";
firstName.length();
// ~~~~~~
// This expression is not callable.
// Type 'Number' has no call signatures
```

TypeScript came to that complaint by, in order:

1. Reading in the code and understanding there to be a variable named firstName
2. Concluding that firstName is of type string because its initial value is a string,
"Whitney"
3. Seeing that the code is trying to access a .length member of firstName and call
it like a function
4. Complaining that the .length member of a string is a number, not a function (it
can’t be called like a function)

Understanding TypeScript’s type system is an important skill for understanding Type‐
Script code. Code snippets in this chapter and throughout the rest of this book will
display more and more complex types that TypeScript will be able to infer from code.

#### Kinds of Errors

While writing TypeScript, the two kinds of “errors” you’ll come across most frequently
are:

**Syntax**
Blocking TypeScript from being converted to JavaScript

**Type**
Something mismatched has been detected by the type checker

The differences between the two are important.

#### Syntax errors

Syntax errors are when TypeScript detects incorrect syntax that it cannot understand
as code. These block TypeScript from being able to properly generate output Java‐
Script from your file. Depending on the tooling and settings you’re using to convert
your TypeScript code to JavaScript, you might still get some kind of JavaScript output
(in default tsc settings, you will). But if you do, it likely won’t look like what you
expect.

This input TypeScript has a syntax error for an unexpected let:

```ts
let let wat;
// ~~~
// Error: ',' expected.
```

Its compiled JavaScript output, depending on the TypeScript compiler version, may
look something like:

```ts
 let let, wat;
```

*Although TypeScript will do its best to output JavaScript code
regardless of syntax errors, the output code will likely not be what
you wanted. It’s best to fix syntax errors before attempting to run
the output JavaScript.*

#### Type errors

Type errors occur when your syntax is valid but the TypeScript type checker has
detected an error with the program’s types. These do not block TypeScript syntax
from being converted to JavaScript. They do, however, often indicate something will
crash or behave unexpectedly if your code is allowed to run.

You saw this in Chapter 1, “From JavaScript to TypeScript” with the console.blub
example, where the code was syntactically valid but TypeScript could detect it would
likely crash when run:

```ts
console.blub("Nothing is worth more than laughter.");
// ~~~~
// Error: Property 'blub' does not exist on type 'Console'.
```

Even though TypeScript may output JavaScript code despite the presence of type
errors, type errors are generally a sign that the output JavaScript likely won’t run the
way you wanted. It’s best to read them and consider fixing any reported issues before
running JavaScript.

*Some projects are configured to block running code during development
until all TypeScript type errors—not just syntax—are fixed.
Many developers, myself included, generally find this to be annoying
and unnecessary. Most projects have a way to not be blocked,
such as with the tsconfig.json file and configuration options covered
in Chapter 13, “Configuration Options”.*

### Assignability

TypeScript reads variables’ initial values to determine what type those variables are
allowed to be. If it later sees an assignment of a new value to that variable, it will
check if that new value’s type is the same as the variable’s.

TypeScript is fine with later assigning a different value of the same type to a variable.
If a variable is, say, initially a string value, later assigning it another string would be
fine:

```ts
let firstName = "Carole";
firstName = "Joan";
```

If TypeScript sees an assignment of a different type, it will give us a type error. We
couldn’t, say, initially declare a variable with a string value and then later on put in a
boolean:

```ts
let lastName = "King";
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.
```

TypeScript’s checking of whether a value is allowed to be provided to a function call
or variable is called assignability: whether that value is assignable to the expected type
it’s passed to. This will be an important term in later chapters as we compare more
complex objects.

#### Understanding Assignability Errors

### Type Annotations

#### Unnecessary Type Annotations

### Type Shapes

#### Modules

### Summary
