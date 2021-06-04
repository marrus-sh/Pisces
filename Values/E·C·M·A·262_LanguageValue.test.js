#!/usr/bin/env -S deno test
//  @ Piscēs :: Values :: E·C·M·A·262_LanguageValue.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_LanguageValue from "./E·C·M·A·262_LanguageValue.js"
import { assert, assertEquals, assertStrictEquals } from "../dev_deps.js"

const values=
	{ undefined: undefined
	, null: null
	, boolean: true
	, string: "ƒriŋ"
	, symbol: Symbol()
	, number: 23
	, bigint: 420n
	, object: Object.create(null)
	, function: ( ) => { }
	, array : [ ]
	, proxy: new Proxy ({ }, { }) }

Deno.test(`Calling E·C·M·A·262_LanguageValue returns the argument unchanged.`, ( ) => Object.values(values).forEach(value => assertStrictEquals(E·C·M·A·262_LanguageValue(value), value)))

Deno.test(`Constructing E·C·M·A·262_LanguageValue returns an object wrapping the argument.`, ( ) => Object.values(values).forEach(value => {
		assertEquals(E·C·M·A·262_LanguageValue.get("type", new E·C·M·A·262_LanguageValue (value)), "object")
		assertStrictEquals(typeof new E·C·M·A·262_LanguageValue (value), typeof Object(value))
		assertEquals((new E·C·M·A·262_LanguageValue (value)).valueOf?.(), Object(value).valueOf?.())
		assertStrictEquals(Object.getPrototypeOf(new E·C·M·A·262_LanguageValue (value)), Object.getPrototypeOf(Object(value))) }))

Deno.test(`E·C·M·A·262_LanguageValue :: Getting "type" returns the type of the value.`, ( ) => Object.values(values).forEach(value => assertEquals(E·C·M·A·262_LanguageValue.get("type", E·C·M·A·262_LanguageValue (value)), ($ => {
	switch ( $ ) {
		case "function": return "object"
		case "object": return value === null ? "null" : "object"
		default: return $ } })(typeof value))))

Deno.test(`E·C·M·A·262_LanguageValue :: Calling "is" returns whether values are identical.`, ( ) => {
	assert(E·C·M·A·262_LanguageValue.call("is", 2, 2))
	assert(E·C·M·A·262_LanguageValue.call("is", NaN, NaN))
	assert(!E·C·M·A·262_LanguageValue.call("is", 0, -0))
	assert(!E·C·M·A·262_LanguageValue.call("is", Object(2), Object(2)))
	assert(!E·C·M·A·262_LanguageValue.call("is", Symbol(), Symbol()))
	assert(!E·C·M·A·262_LanguageValue.call("is", Object.create(null), Object.create(null))) })

Deno.test(`E·C·M·A·262_LanguageValue :: Calling "is a prototype of" returns whether this is in the prototype chain of a value.`, ( ) => {
	assert(E·C·M·A·262_LanguageValue.call("is a prototype of", Object.prototype, { }))
	assert(E·C·M·A·262_LanguageValue.call("is a prototype of", Number.prototype, Object(2)))
	assert(E·C·M·A·262_LanguageValue.call("is a prototype of", null, Object.create(null)))
	assert(E·C·M·A·262_LanguageValue.call("is a prototype of", null, { }))
	assert(!E·C·M·A·262_LanguageValue.call("is a prototype of", Number.prototype, 2))
	assert(!E·C·M·A·262_LanguageValue.call("is a prototype of", undefined, { }))
	assert(!E·C·M·A·262_LanguageValue.call("is a prototype of", 2, Object.create(Object(2))))
	assert(!E·C·M·A·262_LanguageValue.call("is a prototype of", Object.prototype, Object.create(null))) })

Deno.test(`instanceof E·C·M·A·262_LanguageValue returns true for all values.`, ( ) => Object.values(values).forEach(value => assert(value instanceof E·C·M·A·262_LanguageValue)))
