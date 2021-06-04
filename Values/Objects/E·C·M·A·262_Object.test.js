#!/usr/bin/env -S deno test
//  @ Pisces :: Values :: Objects :: E·C·M·A·262_Object.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_Object from "./E·C·M·A·262_Object.js"
import { assert, assertEquals, assertStrictEquals, assertThrows } from "../../dev_deps.js"

const values=
	{ boolean: true
	, string: "ƒriŋ"
	, symbol: Symbol()
	, number: 23
	, bigint: 420n
	, object: Object.create(null)
	, function: ( ) => { }
	, array : [ ]
	, proxy: new Proxy ({ }, { }) }

const symbols=
	{ enumerableSymbolAccess: Symbol("enumerable symbol access")
	, enumerableSymbolData: Symbol("enumerable symbol data")
	, non·enumerableSymbolAccess: Symbol("non·enumerable symbol access")
	, non·enumerableSymbolData: Symbol("non·enumerable symbol data") }

const desc=
	{ enumerableNameAccess:
		{ configurable: false
		, enumerable: true
		, get ( ) { return "enumerable name access" }
		, set: undefined }
	, enumerableNameData:
		{ configurable: false
		, enumerable: true
		, value: "enumerable name data"
		, writable: false }
	, [symbols.enumerableSymbolAccess]:
		{ configurable: false
		, enumerable: true
		, get ( ) { return "enumerable symbol access" }
		, set: undefined }
	, [symbols.enumerableSymbolData]:
		{ configurable: false
		, enumerable: true
		, value: "enumerable symbol data"
		, writable: false }
	, non·enumerableNameAccess:
		{ configurable: false
		, enumerable: false
		, get ( ) { return "non·enumerable name access" }
		, set: undefined }
	, non·enumerableNameData:
		{ configurable: false
		, enumerable: false
		, value: "non·enumerable name data"
		, writable: false }
	, [symbols.non·enumerableSymbolAccess]:
		{ configurable: false
		, enumerable: false
		, get ( ) { return "non·enumerable symbol access" }
		, set: undefined }
	, [symbols.non·enumerableSymbolData]:
		{ configurable: false
		, enumerable: false
		, value: "non·enumerable symbol data"
		, writable: false } }

Deno.test(`Calling E·C·M·A·262_Object throws.`, ( ) => assertThrows(( ) => E·C·M·A·262_Object({ })))

Deno.test(`Constructing E·C·M·A·262_Object returns an object when passed a non‐nullish value.`, ( ) => Object.values(values).forEach(value => {
		assertEquals(E·C·M·A·262_Object.get("type", new E·C·M·A·262_Object (value)), "object")
		assertStrictEquals(typeof new E·C·M·A·262_Object (value), typeof Object(value))
		assertEquals((new E·C·M·A·262_Object (value)).valueOf?.(), Object(value).valueOf?.())
		assertStrictEquals(Object.getPrototypeOf(new E·C·M·A·262_Object (value)), Object.getPrototypeOf(Object(value))) }))

Deno.test(`Constructing E·C·M·A·262_Object throws when passed a nullish value.`, ( ) => {
	assertThrows(( ) => new E·C·M·A·262_Object (undefined))
	assertThrows(( ) => new E·C·M·A·262_Object (null)) })

Deno.test(`E·C·M·A·262_Object :: Getting "is extensible" is correct.`, ( ) => {
	assert(E·C·M·A·262_Object.get("is extensible", { }))
	assert(!E·C·M·A·262_Object.get("is extensible", Object.preventExtensions({ }))) })

Deno.test(`E·C·M·A·262_Object :: Setting "is extensible" is correct.`, ( ) => {
	const obj= { }
	E·C·M·A·262_Object.set("is extensible", true, obj)
	assert(Object.isExtensible(obj))
	E·C·M·A·262_Object.set("is extensible", false, obj)
	assert(!Object.isExtensible(obj))
	assertThrows(( ) => E·C·M·A·262_Object.set("is extensible", true, obj)) })

Deno.test(`E·C·M·A·262_Object :: Getting "is frozen" is correct.`, ( ) => {
	assert(!E·C·M·A·262_Object.get("is frozen", { }))
	assert(E·C·M·A·262_Object.get("is frozen", Object.freeze({ }))) })

Deno.test(`E·C·M·A·262_Object :: Setting "is frozen" is correct.`, ( ) => {
	const obj= { }
	E·C·M·A·262_Object.set("is frozen", false, obj)
	assert(!Object.isFrozen(obj))
	E·C·M·A·262_Object.set("is frozen", true, obj)
	assert(Object.isFrozen(obj))
	assertThrows(( ) => E·C·M·A·262_Object.set("is frozen", false, obj)) })

Deno.test(`E·C·M·A·262_Object :: Getting "is sealed" is correct.`, ( ) => {
	assert(!E·C·M·A·262_Object.get("is sealed", { }))
	assert(E·C·M·A·262_Object.get("is sealed", Object.seal({ }))) })

Deno.test(`E·C·M·A·262_Object :: Setting "is sealed" is correct.`, ( ) => {
	const obj= { }
	E·C·M·A·262_Object.set("is sealed", false, obj)
	assert(!Object.isSealed(obj))
	E·C·M·A·262_Object.set("is sealed", true, obj)
	assert(Object.isSealed(obj))
	assertThrows(( ) => E·C·M·A·262_Object.set("is sealed", false, obj)) })

Deno.test(`E·C·M·A·262_Object :: Getting "own entries" returns key‐value pairs of own enumerable named properties.`, ( ) => assertEquals(new Set (E·C·M·A·262_Object.get("own entries", Object.create({ foo: "bar" }, desc))), new Set (
	[ [ "enumerableNameAccess", "enumerable name access" ]
	, [ "enumerableNameData", "enumerable name data" ] ])))

Deno.test(`E·C·M·A·262_Object :: Getting "own entry keys" returns keys of own enumerable named properties.`, ( ) => assertEquals(new Set (E·C·M·A·262_Object.get("own entry keys", Object.create({ foo: "bar" }, desc))), new Set ([ "enumerableNameAccess", "enumerableNameData" ])))

Deno.test(`E·C·M·A·262_Object :: Getting "own entry values" returns values of own enumerable named properties.`, ( ) => assertEquals(new Set (E·C·M·A·262_Object.get("own entry values", Object.create({ foo: "bar" }, desc))), new Set ([ "enumerable name access", "enumerable name data" ])))

Deno.test(`E·C·M·A·262_Object :: Getting "own keys" returns keys of own properties.`, ( ) => assertEquals(new Set (E·C·M·A·262_Object.get("own keys", Object.create({ foo: "bar" }, desc))), new Set ([ "enumerableNameAccess", "enumerableNameData", symbols.enumerableSymbolAccess, symbols.enumerableSymbolData, "non·enumerableNameAccess", "non·enumerableNameData", symbols.non·enumerableSymbolAccess, symbols.non·enumerableSymbolData ])))

Deno.test(`E·C·M·A·262_Object :: Getting "own names" returns keys of own named properties.`, ( ) => assertEquals(new Set (E·C·M·A·262_Object.get("own names", Object.create({ foo: "bar" }, desc))), new Set ([ "enumerableNameAccess", "enumerableNameData", "non·enumerableNameAccess", "non·enumerableNameData" ])))

Deno.test(`E·C·M·A·262_Object :: Getting "own property descriptors" returns property descriptors of own properties.`, ( ) => assertEquals(E·C·M·A·262_Object.get("own property descriptors", Object.create({ foo: "bar" }, desc)), desc))

Deno.test(`E·C·M·A·262_Object :: Getting "own symbols" returns keys of own symbolic properties.`, ( ) => assertEquals(new Set (E·C·M·A·262_Object.get("own symbols", Object.create({ foo: "bar" }, desc))), new Set ([ symbols.enumerableSymbolAccess, symbols.enumerableSymbolData, symbols.non·enumerableSymbolAccess, symbols.non·enumerableSymbolData ])))

Deno.test(`E·C·M·A·262_Object :: Getting "prototype" is correct.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_Object.get("prototype", { }), Object.prototype)
	assertStrictEquals(E·C·M·A·262_Object.get("prototype", Object.create(null)), null)
	assertStrictEquals(E·C·M·A·262_Object.get("prototype", Object.create(Number.prototype)), Number.prototype)
	assertThrows(( ) => E·C·M·A·262_Object.get("prototype", 1)) })

Deno.test(`E·C·M·A·262_Object :: Setting "prototype" is correct.`, ( ) => {
	const obj= { }
	E·C·M·A·262_Object.set("prototype", Number.prototype, obj)
	assertStrictEquals(Object.getPrototypeOf(obj), Number.prototype)
	E·C·M·A·262_Object.set("prototype", null, obj)
	assertStrictEquals(Object.getPrototypeOf(obj), null)
	assertThrows(( ) => E·C·M·A·262_Object.set("prototype", 2, obj))
	Object.preventExtensions(obj)
	assertThrows(( ) => E·C·M·A·262_Object.set("prototype", Object.prototype, obj))
	assertThrows(( ) => E·C·M·A·262_Object.set("prototype", Object.prototype, 2)) })

Deno.test(`instanceof E·C·M·A·262_Object returns true for objects.`, ( ) => [ { }, [ ], ( ) => { }, new Proxy ({ }, { }) ].forEach(value => assert(value instanceof E·C·M·A·262_Object)))

Deno.test(`instanceof E·C·M·A·262_Object returns false for primitives.`, ( ) => [ undefined, null, true, "string", Symbol(), 27, 98n ].forEach(value => assert(!(value instanceof E·C·M·A·262_Object))))
