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

Errors in the format “Type…is not assignable to type…” will be some of the most
common types of errors you’ll see when writing TypeScript code.

The first type mentioned in that error message is the value the code is attempting to
assign to a recipient. The second type mentioned is the recipient being assigned the
first type. For example, when we wrote lastName = true in the previous snippet,
we were trying to assign the value of true—type boolean—to the recipient variable
lastName—type string.

You’ll see more and more complex assignability issues as you progress through this
book. Remember to read them carefully to understand reported differences between
actual and expected types. Doing so will make it much easier to work with TypeScript
when it’s giving you grief over type errors.

### Type Annotations

Sometimes a variable doesn’t have an initial value for TypeScript to read. TypeScript
won’t attempt to figure out the initial type of the variable from later uses. It’ll consider
the variable by default to be implicitly the any type: indicating that it could be
anything in the world.

Variables that can’t have their initial type inferred go through what’s called an evolving
any: rather than enforce any particular type, TypeScript will evolve its understanding
of the variable’s type each time a new value is assigned.

Here, assigning the evolving any variable rocker is first assigned a string, which
means it has string methods such as toUpperCase, but then is evolved into a number:

```ts
let rocker; // Type: any
rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok
rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
rocker.toUpperCase();
// ~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'.
```

TypeScript was able to catch that we were calling the toUpperCase() method on a
variable evolved to type number. However, it wasn’t able to tell us earlier whether it
was intentional that we were evolving the variable from string to number in the first
place.

Allowing variables to be evolving any typed—and using the any type in general—
partially defeats the purpose of TypeScript’s type checking! TypeScript works best
when it knows what types your values are meant to be. Much of TypeScript’s type
checking can’t be applied to any typed values because they don’t have known types
to be checked. Chapter 13, “Configuration Options” will cover how to configure
TypeScript’s implicit any complaints.

TypeScript provides a syntax for declaring the type of a variable without having to
assign it an initial value, called a type annotation. A type annotation is placed after the
name of a variable and includes a colon followed by the name of a type.

This type annotation indicates the rocker variable is meant to be type string:

```ts
let rocker: string;
rocker = "Joan Jett";
```

These type annotations exist only for TypeScript—they don’t affect the runtime code
and are not valid JavaScript syntax. If you run tsc to compile TypeScript source code
to JavaScript, they’ll be erased. For example, the previous example would be compiled
to roughly the following JavaScript:

```js
// output .js file
let rocker;
rocker = "Joan Jett";
```

Assigning a value whose type is not assignable to the variable’s annotated type will
cause a type error.

This snippet assigns a number to a rocker variable previously declared as type
string, causing a type error:

```ts
let rocker: string;
rocker = 19.58;
// Error: Type 'number' is not assignable to type 'string'.
 ```

You’ll see through the next few chapters how type annotations allow you to augment
TypeScript’s insights into your code, allowing it to give you better features during
development. TypeScript contains an assortment of new pieces of syntax, such as
these type annotations that exist only in the type system.

*Nothing that exists only in the type system gets copied over into
emitted JavaScript. TypeScript types don’t affect emitted JavaScript.*
#### Unnecessary Type Annotations

### Type Shapes

#### Modules

### Summary
