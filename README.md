#  Piscēs
<b>♓️🧩 ECMAScript building blocks.</b>

<dfn>Piscēs</dfn> is a JavaScript (handcoded ECMAScript) library providing various building blocks for developing complex, precisely‐defined JavaScript libraries.
It provides implementations of fundamental ECMAScript Specification functions for use in JavaScript code, plus other helpful prototypes and utilities.

This library is **targeted at “low‐level” JavaScript development**, i.e. the kind of development undertaken with the ECMAScript specification open as reference.
Taking full advantage of it requires familiarity with things like `Reflect` and a willingness to access properties and methods from one prototype on an unrelated object.

**Piscēs was written to serve the interests of [Al·rishāʼ](https://github.com/marrus-sh/Alrescha) development, and not as a general‐use library.**
This means that it is not extensively documented beyond its source code, it is not rigidly versioned, and it offers no guarantees regarding stability between versions.
However, it is written in a generic manner, such that if you find it useful, you *can* integrate it into your project—using ordinary JS imports from `https://raw.githubusercontent.com/marrus-sh/Pisces/[[HASH]]/mod.js`.
Always use a specific hash, and not a branch name like `current`, when importing Piscēs into your project.

Piscēs is broken up into multiple files, which is perfectly acceptable for use with [Deno](https://deno.land), but generally not considered ideal for usage on the web.
You can use the `deno bundle` command to stitch the various source files together into a single script.


##  License

Source files are licensed under the terms of the <cite>Mozilla Public License, version 2.0</cite>.
For more information, see [LICENSE](./LICENSE).
