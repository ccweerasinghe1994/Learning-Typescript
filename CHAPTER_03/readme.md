# CHAPTER 3 Unions and Literals

- [CHAPTER 3 Unions and Literals](#chapter-3-unions-and-literals)
    - [Union Types](#union-types)
        - [Declaring Union Types](#declaring-union-types)
        - [Union Properties](#union-properties)
    - [Narrowing](#narrowing)

_Nothing is constant
Values may change over time
(well, except constants)_

CHAPTER 3
Unions and Literals
Chapter 2, “The Type System” covered the concept of the “type system” and how it
can read values to understand the types of variables. Now I’d like to introduce two key
concepts that TypeScript works with to make inferences on top of those values:

- **Unions**
  Expanding a value’s allowed type to be two or more possible types
- **Narrowing**
  Reducing a value’s allowed type to not be one or more possible types
  Put together, unions and narrowing are powerful concepts that allow TypeScript to
  make informed inferences on your code many other mainstream languages cannot.

## Union Types

Take this mathematician variable:

```ts
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
```

What type is mathematician?

It’s neither only undefined nor only string, even though those are both potential
types. mathematician can be either undefined or string. This kind of “either or”
type is called a `union`. Union types are a wonderful concept that let us handle code
cases where we don’t know exactly which type a value is, but do know it’s one of two
or more options.

TypeScript represents union types using the | (pipe) operator between the possible
values, or constituents. The previous mathematician type is thought of as string |
undefined. Hovering over the mathematician variable would show its type as string
| undefined (Figure 3-1).

![Figure 3-1](../img/7.png)
Figure 3-1. TypeScript reporting the mathematician variable as being type string |
undefined

### Declaring Union Types

Union types are an example of a situation when it might be useful to give an explicit
type annotation for a variable even though it has an initial value. In this example,
thinker starts off null but is known to potentially contain a string instead. Giving
it an explicit string | null type annotation means TypeScript will allow it to be
assigned values of type string:

```ts
let tinker: string | null = null;
if (Math.random() > 0.5) {
    tinker = "SUSAN LANGER";//ok
}
```

Union type declarations can be placed anywhere you might declare a type with a type
annotation.

*The order of a union type declaration does not matter. You can
write boolean | number or number | boolean and TypeScript will
treat both the exact same.*

### Union Properties

When a value is known to be a union type, TypeScript will only allow you to access
member properties that exist on all possible types in the union. It will give you a
type-checking error if you try to access a type that doesn’t exist on all possible types.

In the following snippet, physicist is of type number | string. While .toString()
exists in both types and is allowed to be used, .toUpperCase() and .toFixed()
are not because .toUpperCase() is missing on the number type and .toFixed() is
missing on the string type:

```ts
let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;
physicist.toString(); // Ok
physicist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
physicist.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.
```

Restricting access to properties that don’t exist on all union types is a safety measure.
If an object is not known to definitely be a type that contains a property, TypeScript
will believe it unsafe to try to use that property. The property might not exist!

To use a property of a union typed value that only exists on a subset of the potential
types, your code will need to indicate to TypeScript that the value at that location in
code is one of those more specific types: a process called narrowing.

## Narrowing

Narrowing is when TypeScript infers from your code that a value is of a more specific
type than what it was defined, declared, or previously inferred as. Once TypeScript
knows that a value’s type is more narrow than previously known, it will allow you to
treat the value like that more specific type. A logical check that can be used to narrow
types is called a `type guard`.

Let’s cover two of the common type guards TypeScript can use to deduce type
narrowing from your code.

### Assignment Narrowing

If you directly assign a value to a variable, TypeScript will narrow the variable’s type
to that value’s type.

Here, the admiral variable is declared initially as a number | string, but after being
assigned the value "Grace Hopper", TypeScript knows it must be a string:

```ts
let admiral: string | number;

admiral = "kevin";

admiral.toLowerCase();
admiral.toFixed();
```

here we can see

![](../img/8.png)

Assignment narrowing comes into play when a variable is given an explicit union
type annotation and an initial value too. TypeScript will understand that while the
variable may later receive a value of the union typed values, it starts off as only
the type of its initial value.

In the following snippet, inventor is declared as type number | string, but Type‐
Script knows it’s immediately narrowed to a string from its initial value:

```ts
let inventor: (number | string) = "kevin";

inventor.toLowerCase();
inventor.toFixed();
```

![img](../img/9.png)

typescript is showing the error when we are trying to use number methods.

### Conditional Checks

A common way to get TypeScript to narrow a variable’s value is to write an if
statement checking the variable for being equal to a known value. TypeScript is smart
enough to understand that inside the body of that if statement, the variable must be
the same type as the known value

```ts
let scientist = Math.random() > 0.5 ? "kevin" : 51;

if (scientist === 'kevin') {
    scientist.toUpperCase();
}
scientist.toUpperCase();
```

**️☠️ ERROR ☠️️**

```bash
➜  Learning-Typescript git:(master) ✗ tsc index.ts             
index.ts:6:11 - error TS2339: Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.

6 scientist.toUpperCase();
            ~~~~~~~~~~~


Found 1 error in index.ts:6

```

Narrowing with conditional logic shows TypeScript’s type-checking logic mirroring
good JavaScript coding patterns. If a variable might be one of several types, you’ll
generally want to check its type for being what you need. TypeScript is forcing us to
play it safe with our code. Thanks, TypeScript!

### Typeof Checks

In addition to direct value checking, TypeScript also recognizes the typeof operator
in narrowing down variable types.

Similar to the scientist example, checking if typeof researcher is "string" indi‐
cates to TypeScript that the type of researcher must be string:

```ts
let researcher = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;

if (typeof researcher === 'string') {
    researcher.toUpperCase();
}
// Logical negations from ! and else statements work as well:
if (!(typeof researcher === 'string')) {
    researcher.toFixed();
} else {
    researcher.toUpperCase();
}

//Those code snippets can be rewritten with a ternary statement, which is also sup‐
// ported for type narrowing:

typeof researcher === 'string' ? researcher.toUpperCase() : researcher.toFixed();
```

Whichever way you write them, typeof checks are a practical and often used way to
narrow types.

TypeScript’s type checker recognizes several more forms of narrowing that we’ll see in
later chapters.

## Literal Types

Now that I’ve shown union types and narrowing for working with values that may be
two or more potential types, I’d like go the opposite direction by introducing literal
types: more specific versions of primitive types.

Take this philosopher variable:

```ts
const philosopher = "Hypatia";
```

What type is philosopher?

At first glance, you might say string—and you’d be correct. philosopher is indeed a
string.

But! philosopher is not just any old string. It’s specifically the value "Hypatia".
Therefore, the philosopher variable’s type is technically the more specific "Hypatia".

Such is the concept of a literal type: the type of value that is known to be a specific
value of a primitive, rather than any of those primitive’s values at all. The primitive
type string represents the set of all possible strings that could ever exist; the literal
type "Hypatia" represents just that one string.

If you declare a variable as const and directly give it a literal value, TypeScript will
infer the variable to be that literal value as a type. This is why, when you hover a
mouse over a const variable with an initial literal value in an IDE such as VS Code,
it will show you the variable’s type as that literal (Figure 3-2) instead of the more
general primitive (Figure 3-3).

![Figure 3-2](../img/10.png)

Figure 3-2. TypeScript reporting a const variable as being specifically its literal type

![Figure 3-3](../img/11.png)

Figure 3-3. TypeScript reporting a let variable as being generally its primitive type

You can think of each primitive type as a union of every possible matching literal
value. In other words, a primitive type is the set of all possible literal values of that
type.
Other than the boolean, null, and undefined types, all other primitives such as
number and string have an infinite number of literal types. The common types you’ll
find in typical TypeScript code are just those:

- 💧 boolean: just true | false
- 💧 null and undefined: both just have one literal value, themselves
- 💧 number: 0 | 1 | 2 | ... | 0.1 | 0.2 | ...
- 💧 string: "" | "a" | "b" | "c" | ... | "aa" | "ab" | "ac" | ...

Union type annotations can mix and match between literals and primitives. A repre‐
sentation of a lifespan, for example, might be represented by any number or one of a
couple known edge cases:

```ts
let philosopher = "Hypatia";

let lifeSpan: number | "ongoing" | "uncertain";

lifeSpan = 89;

lifeSpan = "ongoing";

lifeSpan = "uncertain";

lifeSpan = true;
```

**️☠️ ERROR ☠️️**

```bash
➜  Learning-Typescript git:(master) tsc index.ts 
index.ts:11:1 - error TS2322: Type 'true' is not assignable to type 'number | "ongoing" | "uncertain"'.

11 lifeSpan = true;
   ~~~~~~~~


Found 1 error in index.ts:11
```














































