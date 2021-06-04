#!/usr/bin/env -S deno test
//  @ Piscēs :: Values :: Primitives :: E·C·M·A·262_Primitive.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_Primitive from "./E·C·M·A·262_Primitive.js"
import { assert, assertStrictEquals, assertThrows } from "../../dev_deps.js"

const primitives=
	{ "undefined": undefined
	, "null": null
	, "boolean": true
	, "string": "ƒriŋ"
	, "symbol": Symbol()
	, "number": 23
	, "bigint": 420n }

const object=
	{ toString ( ) { return "string" }
	, valueOf ( ) { return "value" } }

const stringy=
	{ toString ( ) { return true }
	, valueOf ( ) { return Object(false) } }

const valuey=
	{ toString ( ) { return Object("bad") }
	, valueOf ( ) { return "good" } }

const overwritten=
	{ toString ( ) { return "string" }
	, valueOf ( ) { return "value" }
	, [Symbol.toPrimitive] ( $ ) { return $ } }

const bad=
	{ toString ( ) { return Object("bad") }
	, valueOf ( ) { return Object(false) } }

const badOverwrite=
	{ toString ( ) { return "string" }
	, valueOf ( ) { return "value" }
	, [Symbol.toPrimitive] ( $ ) { return Object($) } }

Deno.test(`Calling E·C·M·A·262_Primitive returns its argument when passed a primitive.`, ( ) => Object.values(primitives).forEach(value => assertStrictEquals(E·C·M·A·262_Primitive(value), value)))

Deno.test(`Calling E·C·M·A·262_Primitive returns a primitive when passed an object.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_Primitive(object), "value")
	assertStrictEquals(E·C·M·A·262_Primitive(stringy), true)
	assertStrictEquals(E·C·M·A·262_Primitive(valuey), "good")
	assertStrictEquals(E·C·M·A·262_Primitive(overwritten), "default")
	assertThrows(( ) => E·C·M·A·262_Primitive(bad))
	assertThrows(( ) => E·C·M·A·262_Primitive(badOverwrite)) })

Deno.test(`Calling E·C·M·A·262_Primitive respects a string hint.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_Primitive(object, "string"), "string")
	assertStrictEquals(E·C·M·A·262_Primitive(stringy, "string"), true)
	assertStrictEquals(E·C·M·A·262_Primitive(valuey, "string"), "good")
	assertStrictEquals(E·C·M·A·262_Primitive(overwritten, "string"), "string")
	assertThrows(( ) => E·C·M·A·262_Primitive(bad, "string"))
	assertThrows(( ) => E·C·M·A·262_Primitive(badOverwrite, "string")) })

Deno.test(`Calling E·C·M·A·262_Primitive respects a number hint.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_Primitive(object, "number"), "value")
	assertStrictEquals(E·C·M·A·262_Primitive(stringy, "number"), true)
	assertStrictEquals(E·C·M·A·262_Primitive(valuey, "number"), "good")
	assertStrictEquals(E·C·M·A·262_Primitive(overwritten, "number"), "number")
	assertThrows(( ) => E·C·M·A·262_Primitive(bad, "number"))
	assertThrows(( ) => E·C·M·A·262_Primitive(badOverwrite, "number")) })

Deno.test(`Calling E·C·M·A·262_Primitive throws for an unrecognized hint.`, ( ) => {
	assertThrows(( ) => E·C·M·A·262_Primitive(object, "default"))
	assertThrows(( ) => E·C·M·A·262_Primitive(stringy, "default"))
	assertThrows(( ) => E·C·M·A·262_Primitive(valuey, "default"))
	assertThrows(( ) => E·C·M·A·262_Primitive(overwritten, "default"))
	assertThrows(( ) => E·C·M·A·262_Primitive(bad, "default"))
	assertThrows(( ) => E·C·M·A·262_Primitive(badOverwrite, "default")) })

Deno.test(`Constructing E·C·M·A·262_Primitive() throws.`, ( ) => assertThrows(( ) => new E·C·M·A·262_Primitive))

Deno.test(`instanceof E·C·M·A·262_Primitive returns true for primitives.`, ( ) => Object.values(primitives).forEach(value => assert(value instanceof E·C·M·A·262_Primitive)))

Deno.test(`instanceof E·C·M·A·262_Primitive returns false for objects.`, ( ) => [ { }, [ ], ( ) => { }, new Proxy ({ }, { }) ].forEach(value => assert(!(value instanceof E·C·M·A·262_Primitive))))
