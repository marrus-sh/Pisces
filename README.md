#  Pisces
<b>♓️🧩 ECMAScript building blocks.</b>

<dfn>Pisces</dfn> is a JavaScript (handcoded ECMAScript) library providing various building blocks for developing complex, precisely‐defined JavaScript libraries.
It provides implementations of fundamental ECMAScript Specification functions for use in JavaScript code, plus other helpful prototypes and utilities.

This library is **targeted at “low‐level” JavaScript development**, i.e. the kind of development undertaken with the ECMAScript specification open as reference.
Taking full advantage of it requires familiarity with things like `Reflect` and a willingness to access properties and methods from one prototype on an unrelated object.

This library is broken up into multiple files, which is generally not considered ideal for usage on the web.
“Stitching” the files together is left as an exercise for the user.
It is perfectly acceptable for use with [Deno](https://deno.land); however, TypeScript definitions are not provided (as TypeScript uses different and sometimes unwieldy/incompatible abstractions to those of low‐level ECMAScript proper).

##  Versioning and Development

✨ fuck around and find out ✨🛹

Pisces is not a plug·and·play‐style library.
You should not make use of it without comprehensively referencing both the ECMAScript specification and the source code of the version of Pisces you are using.
When you update Pisces to a newer version, you can use `git diff` to see the changes which have been made.

If that sounds user‐hostile to you, consider that I wrote this library for my own purposes, and not because I want users.

##  License

Source files are licensed under the terms of the <cite>Mozilla Public License, version 2.0</cite>.
For more information, see [LICENSE](./LICENSE).
