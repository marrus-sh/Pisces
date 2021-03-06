#!/usr/bin/env -S deno test
//  @ Piscēs :: Values :: Primitives :: E·C·M·A·262_String.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_String from "./E·C·M·A·262_String.js"
import { assert, assertStrictEquals, assertThrows } from "../../dev_deps.js"

const values=
	{ undefined: undefined
	, null: null
	, true: true
	, string: "string"
	, "23": 23
	, "420": 420n
	, stringy: { toString ( ) { return "stringy" } }
	, primitivey: { [Symbol.toPrimitive] ( $ ) { return "primitivey" } }
	, valuey:
		{ toString ( ) { return this }
		, valueOf ( ) { return "valuey" } }
	, "( ) => { }": ( ) => { }
	, "": [ ]
	, "[object Object]": new Proxy ({ }, { }) }

Deno.test(`Calling E·C·M·A·262_String returns a string when passed a nonsymbol argument.`, ( ) => Object.entries(values).forEach(( [ key, value ] ) => assertStrictEquals(E·C·M·A·262_String(value), String(key))))

Deno.test(`Calling E·C·M·A·262_String throws when passed a symbol.`, ( ) => {
	assertThrows(( ) => E·C·M·A·262_String(Symbol()))
	assertThrows(( ) => E·C·M·A·262_String(Object(Symbol()))) })

Deno.test(`Constructing E·C·M·A·262_String throws.`, ( ) => assertThrows(( ) => new E·C·M·A·262_String))

Deno.test(`instanceof E·C·M·A·262_String returns true for strings.`, ( ) => assert("" instanceof E·C·M·A·262_String))

Deno.test(`instanceof E·C·M·A·262_String returns false for others.`, ( ) => [ undefined, null, true, Symbol(), 27, 98n, { }, [ ], ( ) => { }, new Proxy ({ }, { }) ].forEach(value => assert(!(value instanceof E·C·M·A·262_String))))
