#!/usr/bin/env -S deno test
//  @ Piscēs :: Values :: Primitives :: R·F·C·4648_Base64.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import R·F·C·4648_Base64 from "./R·F·C·4648_Base64.js"
import { assert, assertEquals, assertStrictEquals, assertThrows } from "../../dev_deps.js"

const base64s=
	{ "": null
	, AGIAYQBzAGUANgA0: "base64"
	, "R/Q=": new Uint16Array ([ 62535 ])
	, "S0lCSQ==": new Uint8ClampedArray ([ 75, 73, 66, 73 ]).buffer
	, YmFzZTY0: new DataView (new Uint8Array ([ 98, 97, 115, 101, 54, 52 ]).buffer) }

Deno.test(`Calling R·F·C·4648_Base64 returns the correct string.`, ( ) => Object.entries(base64s).forEach(( [ key, value ] ) => assertStrictEquals(R·F·C·4648_Base64(value), key)))

Deno.test(`Constructing R·F·C·4648_Base64 throws.`, ( ) => assertThrows(( ) => new R·F·C·4648_Base64))

Deno.test(`R·F·C·4648_Base64 :: Getting "data" gets the correct data.`, ( ) => {
	assertEquals(R·F·C·4648_Base64.get("data", ""), new ArrayBuffer)
	assertEquals(R·F·C·4648_Base64.get("data", "AGIAYQBzAGUANgA0"), new Uint8Array (Array.prototype.map.call("\u{0}b\u{0}a\u{0}s\u{0}e\u{0}6\u{0}4", $ => $.charCodeAt(0))).buffer)
	assertEquals(R·F·C·4648_Base64.get("data", "R/Q="), new Uint16Array ([ 62535 ]).buffer)
	assertEquals(R·F·C·4648_Base64.get("data", "S0lCSQ=="), new Uint8ClampedArray ([ 75, 73, 66, 73 ]).buffer)
	assertEquals(R·F·C·4648_Base64.get("data", "YmFzZTY0"), new Uint8Array ([ 98, 97, 115, 101, 54, 52 ]).buffer) })

Deno.test(`R·F·C·4648_Base64 :: Getting "data" throws when this contains an invalid character.`, ( ) => assertThrows(( ) => R·F·C·4648_Base64.get("data", "abc_")))

Deno.test(`R·F·C·4648_Base64 :: Getting "data" throws when this contains an invalid equals.`, ( ) => assertThrows(( ) => R·F·C·4648_Base64.get("data", "abc==")))

Deno.test(`R·F·C·4648_Base64 :: Getting "data" throws when this has a length with a remainder of 1 when divided by 4.`, ( ) => {
	assertThrows(( ) => R·F·C·4648_Base64.get("data", "abcde"))
	assertThrows(( ) => R·F·C·4648_Base64.get("data", "abcde===")) })

Deno.test(`instanceof E·C·M·A·262_String returns true for base64 strings.`, ( ) => Object.keys(base64s).forEach(key => assert(key instanceof R·F·C·4648_Base64)))

Deno.test(`instanceof E·C·M·A·262_String returns false for others.`, ( ) => [ undefined, null, true, Symbol(), 27, 98n, { }, [ ], ( ) => { }, new Proxy ({ }, { }), "abc_", "a", "abc==" ].forEach(value => assert(!(value instanceof R·F·C·4648_Base64))))
