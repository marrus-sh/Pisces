#!/usr/bin/env -S deno test
//  @ Piscēs :: Values :: Objects :: E·C·M·A·262_PropertyDescriptor.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_LanguageValue from "../E·C·M·A·262_LanguageValue.js"
import E·C·M·A·262_PropertyDescriptor from "./E·C·M·A·262_PropertyDescriptor.js"
import { assert, assertStrictEquals, assertThrows } from "../../dev_deps.js"

Deno.test(`Calling E·C·M·A·262_PropertyDescriptor throws.`, ( ) => assertThrows(( ) => E·C·M·A·262_PropertyDescriptor({ })))

Deno.test(`Constructing E·C·M·A·262_PropertyDescriptor returns an object when passed a property descriptor value.`, ( ) => assertStrictEquals(E·C·M·A·262_LanguageValue.get("type", new E·C·M·A·262_PropertyDescriptor ({ })), "object"))

Deno.test(`Constructing E·C·M·A·262_PropertyDescriptor does not set descriptor properties not present on the passed object.`, ( ) => {
	const obj= new E·C·M·A·262_PropertyDescriptor ({ })
	assert(!("configurable" in obj))
	assert(!("enumerable" in obj))
	assert(!("get" in obj))
	assert(!("set" in obj))
	assert(!("value" in obj))
	assert(!("writable" in obj)) })

Deno.test(`Constructing E·C·M·A·262_PropertyDescriptor sets descriptor properties present on the passed object.`, ( ) => {
	let obj= new E·C·M·A·262_PropertyDescriptor ({ configurable: 0 })
	assert(obj.hasOwnProperty("configurable") && obj.configurable === false)
	obj= new E·C·M·A·262_PropertyDescriptor ({ enumerable: 1 })
	assert(obj.hasOwnProperty("enumerable") && obj.enumerable === true)
	const fn= ( ) => { }
	obj= new E·C·M·A·262_PropertyDescriptor ({ get: fn })
	assert(obj.hasOwnProperty("get") && obj.get === fn)
	obj= new E·C·M·A·262_PropertyDescriptor ({ set: undefined })
	assert(obj.hasOwnProperty("set") && obj.set === undefined)
	obj= new E·C·M·A·262_PropertyDescriptor ({ value: undefined })
	assert(obj.hasOwnProperty("value") && obj.value === undefined)
	obj= new E·C·M·A·262_PropertyDescriptor ({ writable: undefined })
	assert(obj.hasOwnProperty("writable") && obj.writable === false) })

Deno.test(`Constructing E·C·M·A·262_PropertyDescriptor throws when passed an invalid accessor descriptor.`, ( ) => {
	assertThrows(( ) => new E·C·M·A·262_PropertyDescriptor ({ get: "foo" }))
	assertThrows(( ) => new E·C·M·A·262_PropertyDescriptor ({ set: null })) })

Deno.test(`Constructing E·C·M·A·262_PropertyDescriptor throws when passed a descriptor with both accessor and data properties.`, ( ) => assertThrows(( ) => new E·C·M·A·262_PropertyDescriptor (
		{ get: undefined
		, writable: undefined })))

Deno.test(`Constructing E·C·M·A·262_PropertyDescriptor throws when passed a nullish value.`, ( ) => {
	assertThrows(( ) => new E·C·M·A·262_PropertyDescriptor (undefined))
	assertThrows(( ) => new E·C·M·A·262_PropertyDescriptor (null)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "completed" returns an object when passed a property descriptor value.`, ( ) => assertStrictEquals(E·C·M·A·262_LanguageValue.get("type", E·C·M·A·262_PropertyDescriptor.get("completed", { })), "object"))

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "completed" sets descriptor properties not present on the passed object.`, ( ) => {
	let obj= E·C·M·A·262_PropertyDescriptor.get("completed", { })
	assert(obj.hasOwnProperty("configurable") && obj.configurable === false)
	assert(obj.hasOwnProperty("enumerable") && obj.enumerable === false)
	assert(!("get" in obj))
	assert(!("set" in obj))
	assert(obj.hasOwnProperty("value") && obj.value === undefined)
	assert(obj.hasOwnProperty("writable") && obj.writable === false)
	obj= E·C·M·A·262_PropertyDescriptor.get("completed", { set: undefined })
	assert(obj.hasOwnProperty("configurable") && obj.configurable === false)
	assert(obj.hasOwnProperty("enumerable") && obj.enumerable === false)
	assert(obj.hasOwnProperty("get") && obj.value === undefined)
	assert(obj.hasOwnProperty("set") && obj.value === undefined)
	assert(!("value" in obj))
	assert(!("writable" in obj)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "completed" sets descriptor properties present on the passed object.`, ( ) => {
	let obj= E·C·M·A·262_PropertyDescriptor.get("completed", { configurable: 0 })
	assert(obj.hasOwnProperty("configurable") && obj.configurable === false)
	obj= E·C·M·A·262_PropertyDescriptor.get("completed", { enumerable: 1 })
	assert(obj.hasOwnProperty("enumerable") && obj.enumerable === true)
	const fn= ( ) => { }
	obj= E·C·M·A·262_PropertyDescriptor.get("completed", { get: fn })
	assert(obj.hasOwnProperty("get") && obj.get === fn)
	obj= E·C·M·A·262_PropertyDescriptor.get("completed", { set: undefined })
	assert(obj.hasOwnProperty("set") && obj.set === undefined)
	obj= E·C·M·A·262_PropertyDescriptor.get("completed", { value: undefined })
	assert(obj.hasOwnProperty("value") && obj.value === undefined)
	obj= E·C·M·A·262_PropertyDescriptor.get("completed", { writable: undefined })
	assert(obj.hasOwnProperty("writable") && obj.writable === false) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "completed" throws when passed an invalid accessor descriptor.`, ( ) => {
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("completed", { get: "foo" }))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("completed", { set: null })) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "completed" throws when passed a descriptor with both accessor and data properties.`, ( ) => assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("completed",
		{ get: undefined
		, writable: undefined })))

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "completed" throws when passed a nullish value.`, ( ) => {
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("completed", undefined))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("completed", null)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "getter" works.`, ( ) => {
	const fn= ( ) => { }
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("getter", undefined), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("getter", { }), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("getter", Object.create({ get: fn })), fn)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("getter", Object.create({ get: fn }, { get: { value: undefined } })), undefined)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("getter", { get: null }))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("getter", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("getter", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "is accessor descriptor" works.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is accessor descriptor", undefined), false)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is accessor descriptor", { }), false)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is accessor descriptor", Object.create({ set: undefined })), true)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is accessor descriptor", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is accessor descriptor", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "is configurable" works.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is configurable", undefined), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is configurable", { }), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is configurable", Object.create({ configurable: { } })), true)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is configurable", Object.create({ configurable: { } }, { configurable: { value: undefined } })), false)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is configurable", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is configurable", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "is data descriptor" works.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is data descriptor", undefined), false)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is data descriptor", { }), false)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is data descriptor", Object.create({ writable: undefined })), true)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is data descriptor", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is data descriptor", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "is enumerable" works.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is enumerable", undefined), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is enumerable", { }), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is enumerable", Object.create({ enumerable: { } })), true)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is enumerable", Object.create({ enumerable: { } }, { enumerable: { value: undefined } })), false)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is enumerable", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is enumerable", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "is generic descriptor" works.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is generic descriptor", undefined), false)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is generic descriptor", { }), true)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is generic descriptor", Object.create({ get: undefined })), false)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is generic descriptor", Object.create({ value: undefined })), false)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is generic descriptor", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is generic descriptor", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "is writable" works.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is writable", undefined), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is writable", { }), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is writable", Object.create({ writable: { } })), true)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("is writable", Object.create({ writable: { } }, { writable: { value: undefined } })), false)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is writable", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("is writable", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "setter" works.`, ( ) => {
	const fn= ( ) => { }
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("setter", undefined), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("setter", { }), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("setter", Object.create({ set: fn })), fn)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("setter", Object.create({ set: fn }, { set: { value: undefined } })), undefined)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("setter", { set: null }))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("setter", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("setter", 2)) })

Deno.test(`E·C·M·A·262_PropertyDescriptor :: Getting "value" works.`, ( ) => {
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("value", undefined), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("value", { }), undefined)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("value", Object.create({ value: null })), null)
	assertStrictEquals(E·C·M·A·262_PropertyDescriptor.get("value", Object.create({ value: null }, { value: { value: undefined } })), undefined)
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("value", null))
	assertThrows(( ) => E·C·M·A·262_PropertyDescriptor.get("value", 2)) })

Deno.test(`instanceof E·C·M·A·262_PropertyDescriptor returns true for most objects.`, ( ) => [ { }, [ ], ( ) => { }, new Proxy ({ }, { }) ].forEach(value => assert(value instanceof E·C·M·A·262_PropertyDescriptor)))

Deno.test(`instanceof E·C·M·A·262_PropertyDescriptor returns false for invalid accessor descriptors.`, ( ) => {
	assert(!({ get: "foo" } instanceof E·C·M·A·262_PropertyDescriptor))
	assert(!({ set: null } instanceof E·C·M·A·262_PropertyDescriptor)) })

Deno.test(`instanceof E·C·M·A·262_PropertyDescriptor returns false when passed a descriptor with both accessor and data properties.`, ( ) => assert(!(
		{ get: undefined
		, writable: undefined } instanceof E·C·M·A·262_PropertyDescriptor)))

Deno.test(`instanceof E·C·M·A·262_PropertyDescriptor returns false for primitives.`, ( ) => [ undefined, null, true, "string", Symbol(), 27, 98n ].forEach(value => assert(!(value instanceof E·C·M·A·262_PropertyDescriptor))))
