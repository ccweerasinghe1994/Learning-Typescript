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

### Assignability

#### Understanding Assignability Errors

### Type Annotations

#### Unnecessary Type Annotations

### Type Shapes

#### Modules

### Summary
