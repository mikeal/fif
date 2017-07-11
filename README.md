# fif language

[![Greenkeeper badge](https://badges.greenkeeper.io/mikeal/fif.svg)](https://greenkeeper.io/)

**Note: this is highly unstable and is likely to make breaking changes on a daily basis.**

fif is a programming language.

fif is fun, in fact, fif stands for "fif is fun" :)

fif is a **subset** of JavaScript. Various language features have been removed, no syntax or language semantics have been added other than additional standard functions.

fif is a platform. Standard functions, a module system, and compilers are included.

fif is accessible. The primary purpose of the language is to be as easy as possible to understand, learn, and teach.

fif is portable. The primary purpose of the platform is to be designed from the ground up to run on *any* widely adopted JS environment including major browsers and Node.

## fif for JS developers.

The primary thing missing from fif is inheritance and object instantiation. While these features are useful they are also confusing and hard to teach. Instead, fif takes a more functional approach and simply allows you to copy and clone objects acheiving the same results you can find with inheritance.

`clone()` returns a shallow copy of an object with the functions mutated in order to pass the cloned object in as the first parameter.

```javascript
var Base = {}
Base.print = function (self, x) {console.log(x)}

var x = clone(Base)
x.print('asdf')
// 'asdf'
Base.print(x, 'asdf')
// 'asdf'
```

If you want to accomplish the traditional task of "inheritance" when creating new base objects you can avoid the mutation of function properties by using `copy()`.

```javascript
var Base = {}
Base.print = function (self, x) {console.log(x)}
var Capitals = copy(Base)
Capitals.caps = function (self, x) {console.log(x.toUpperCase())}

var x = clone(Capitals)
x.print('asdf')
// 'asdf'
x.caps('asdf')
// 'ASDF'
```

There is currently no automatic instantiation function called although this is under discussion.

While these semantics may seem funny to those schooled in classical and prototypal inheritance, consider the issues they avoid. The `function` keyword now has a single meaning. Issues realed to `this`, especially in closures, no longer appear. The semantics around property lookup are far more understandable and easy to teach.

The following keywords have been removed from JavaScript and will now throw errors: `new`, `instanceof`. Access to the property name `prototype` is no longer allowed. Assigning to or accessing `this` is also no longer allowed.

> Please note that, although this appears to be slower than using inheritance in modern vms the compiler will likely optimize copy() and clone() to use inheritance in the future in order to benefit from those vm optimizations. This is the primary reason that access to the prototype property is restricted, so that it can still be used by the fif compiler.

> Note: we should probably remove `with` as well as restrict .call and .apply properties and replace with platform functions.

## Roadmap

### Open Discussions

This is where we will eventually list Issues which are open discussions related to the current feature set and roadmap.

### 0.1.0 (CURRENT UNSTABLE)

* Node support only.
* Implement base removals.
* Simple `clone()` and `copy()`.
* Simple module system (no global loader, all loads are fileystem relative).

### 0.2.0 (FUTURE)

* Add support for browsers.
* Explore "native" modules/plugins which can optimize the compiler.
* Explore `clone()` and `copy()` optimizations using prototypes.
* Explore humanized error messages for easier learning.

### 0.3.0 (FUTURE)

* "Streams" (browser and node, and possible runtimejs depending on what state it is in)

### 0.4.0 (FUTURE)

* FS and NET

### 0.5.0 (FUTURE)

* Package manager
