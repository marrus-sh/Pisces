#!/usr/bin/env -S deno test
//  @ Pisces :: Values :: Primitives :: E·C·M·A·262_PropertyKey.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_PropertyKey from "./E·C·M·A·262_PropertyKey.js"
import { assert, assertStrictEquals, assertThrows } from "../../dev_deps.js"

const symbol= Symbol()

const values=
	{ undefined: undefined
	, null: null
	, true: true
	, string: "string"
	, [symbol]: symbol
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

Deno.test(`Calling E·C·M·A·262_Primitive returns a property key.`, ( ) => Object.entries(values).forEach(( [ key, value ] ) => assertStrictEquals(E·C·M·A·262_PropertyKey(value), typeof key == "symbol" ? key : String(key))))

Deno.test(`Constructing E·C·M·A·262_PropertyKey throws.`, ( ) => assertThrows(( ) => new E·C·M·A·262_PropertyKey))

Deno.test(`instanceof E·C·M·A·262_PropertyKey returns true for property keys.`, ( ) => [ "", Symbol() ].forEach(value => assert(value instanceof E·C·M·A·262_PropertyKey)))

Deno.test(`instanceof E·C·M·A·262_PropertyKey returns false for others.`, ( ) => [ undefined, null, true, 27, 98n, { }, [ ], ( ) => { }, new Proxy ({ }, { }) ].forEach(value => assert(!(value instanceof E·C·M·A·262_PropertyKey))))
