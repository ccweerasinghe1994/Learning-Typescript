# [HOME PAGE 🏠](../README.MD)

- [HOME PAGE 🏠](#home-page-)
  - [CHAPTER 1](#chapter-1)
  - [Part I. Concepts](#part-i-concepts)
    - [From JavaScript to TypeScript](#from-javascript-to-typescript)
    - [History of JavaScript](#history-of-javascript)
    - [Vanilla JavaScript’s Pitfalls](#vanilla-javascripts-pitfalls)
      - [Costly Freedom](#costly-freedom)
      - [Loose Documentation](#loose-documentation)
      - [Weaker Developer Tooling](#weaker-developer-tooling)
    - [TypeScript](#typescript)
    - [Getting Started in the TypeScript Playground](#getting-started-in-the-typescript-playground)
      - [TypeScript in Action](#typescript-in-action)
      - [Freedom Through Restriction](#freedom-through-restriction)
      - [Precise Documentation](#precise-documentation)
      - [Stronger Developer Tooling](#stronger-developer-tooling)
      - [Compiling Syntax](#compiling-syntax)
    - [Getting Started Locally](#getting-started-locally)
    - [What TypeScript Is Not](#what-typescript-is-not)
    - [Summary](#summary)

## CHAPTER 1

## Part I. Concepts

### From JavaScript to TypeScript

*JavaScript today
Supports browsers decades past
Beauty of the web*

Before talking about TypeScript, we need to first understand where it came from:
JavaScript!

### History of JavaScript

JavaScript was designed in 10 days by Brendan Eich at Netscape in 1995 to be
approachable and easy to use for websites. Developers have been poking fun at its
quirks and perceived shortcomings ever since. I’ll cover some of them in the next
section.

JavaScript has evolved tremendously since 1995, though! Its steering committee,
TC39, has released new versions of ECMAScript—the language specification that
JavaScript is based on—yearly since 2015 with new features that bring it in line
with other modern languages. Impressively, even with regular new language versions,
JavaScript has managed to maintain backward compatibility for decades in varying
environments, including browsers, embedded applications, and server runtime's.

Today, JavaScript is a wonderfully flexible language with a lot of strengths. One
should appreciate that while JavaScript has its quirks, it’s also helped enable the
incredible growth of web applications and the internet.

### Vanilla JavaScript’s Pitfalls

Developers often refer to using JavaScript without any significant language extensions
or frameworks as “vanilla”: referring to it being the familiar, original flavor. I’ll
soon go over why TypeScript adds just the right flavor to overcome these particular
major pitfalls, but it’s useful to understand just why they can be painful. All these
weaknesses become more pronounced the larger and longer-lived a project gets.

#### Costly Freedom

Many developers’ biggest gripe with JavaScript is unfortunately one of its key features:
JavaScript provides virtually no restrictions in how you structure your code. That
freedom makes it a ton of fun to start a project in JavaScript!

As you get to have more and more files, though, it becomes apparent how that
freedom can be damaging. Take the following snippet, presented out of context from
some fictional painting application:

```js
function paintPainting(painter, painting) {
return painter
.prepare()
.paint(painting, painter.ownMaterials)
.finish();
}
```

Reading that code without any context, you can only have vague ideas on how to call
the paintPainting function. Perhaps if you’ve worked in the surrounding codebase
you may recall that painter should be what’s returned by some getPainter function.
You might even make a lucky guess that painting is a string.

Even if those assumptions are correct, though, later changes to the code may invalidate
them. Perhaps painting is changed from a string to some other data type, or
maybe one or more of the painter’s methods are renamed.

Other languages might refuse to let you run code if their compiler determines it
would likely crash. Not so with dynamically typed languages—those that run code
without checking if it will likely crash first—such as JavaScript.

The freedom of code that makes JavaScript so fun becomes a real pain when you want
safety in running your code.

#### Loose Documentation

Nothing exists in the JavaScript language specification to formalize describing what
function parameters, function returns, variables, or other constructs in code are
meant to be. Many developers have adopted a standard called JSDoc to describe
functions and variables using block comments. The JSDoc standard describes how you might write documentation comments placed directly above constructs such as
functions and variables, formatted in a standard way. Here’s an example, again taken
out of context:

```js
/**
* Performs a painter painting a particular painting.
*
* @param {Painting} painter
* @param {string} painting
* @returns {boolean} Whether the painter painted the painting.
*/
function paintPainting(painter, painting) { /* ... */ }
```

JSDoc has key issues that often make it unpleasant to use in a large codebase:

- Nothing stops JSDoc descriptions from being wrong about code.
Even if your JSDoc descriptions were previously correct, during code refactors
- it can be difficult to find all the now-invalid JSDoc comments related to your
changes.
- Describing complex objects is unwieldy and verbose, requiring multiple standalone
comments to define types and their relationships.

Maintaining JSDoc comments across a dozen files doesn’t take up too much time, but
across hundreds or even thousands of constantly updating files can be a real chore.

#### Weaker Developer Tooling

Because JavaScript doesn’t provide built-in ways to identify types, and code easily
diverges from JSDoc comments, it can be difficult to automate large changes to
or gain insights about a codebase. JavaScript developers are often surprised to see
features in typed languages such as C# and Java that allow developers to perform class
member renamings or jump to the place an argument’s type was declared.

*You may protest that modern IDEs such as VS Code do provide
some development tools such as automated refactors to JavaScript.
True, but: they use TypeScript or an equivalent under the hood for
many of their JavaScript features, and those development tools are
not as reliable or as powerful in most JavaScript code as they are in
well-defined TypeScript code.*

### TypeScript

TypeScript was created internally at Microsoft in the early 2010s then released and
open sourced in 2012. The head of its development is Anders Hejlsberg, notable for
also having lead the development of the popular C# and Turbo Pascal languages.
TypeScript is often described as a “superset of JavaScript” or “JavaScript with types.”
But what is TypeScript?

TypeScript is four things:

- **Programming language**
A language that includes all the existing JavaScript syntax, plus new TypeScriptspecific
syntax for defining and using types

- **Type checker**
A program that takes in a set of files written in JavaScript and/or TypeScript,
develops an understanding of all the constructs (variables, functions…) created,
and lets you know if it thinks anything is set up incorrectly
- **Compiler**
A program that runs the type checker, reports any issues, then outputs the
equivalent JavaScript code

- **Language service**
A program that uses the type checker to tell editors such as VS Code how to
provide helpful utilities to developers

### Getting Started in the TypeScript Playground

You’ve read a good amount about TypeScript by now. Let’s get you writing it!

The main TypeScript website includes a “Playground” editor at <https://www.typescript>
lang.org/play. You can type code into the main editor and see many of the same
editor suggestions you would see when working with TypeScript locally in a full IDE
(Integrated Development Environment).

Most of the snippets in this book are intentionally small and self-contained enough
that you could type them out in the Playground and tinker with them for fun.

#### TypeScript in Action

#### Freedom Through Restriction

#### Precise Documentation

#### Stronger Developer Tooling

#### Compiling Syntax

### Getting Started Locally

### What TypeScript Is Not

### Summary
