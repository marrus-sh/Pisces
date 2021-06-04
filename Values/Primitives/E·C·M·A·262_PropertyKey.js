//  @ Pisces :: Values :: Primitives :: E·C·M·A·262_PropertyKey.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_Primitive from "./E·C·M·A·262_Primitive.js"
import E·C·M·A·262_String from "./E·C·M·A·262_String.js"

export default function E·C·M·A·262_PropertyKey ( argument ) {
	//  Converts the provided value to a property key, either a symbol or a string.
	//
	//  This is essentially a re·implementation of ‘ECMAScript §7.1.19 ToPropertyKey ( argument )’ @ ‹ https://tc39.es/ecma262/#sec-topropertykey › for use in JavaScript code.
	//
	//  ☞ Note
	//  This function will always return a property key; it will throw a TypeError if conversion fails.
	if ( new.target !== undefined ) throw new TypeError ("Property keys cannot be constructed with new.")
	const key= E·C·M·A·262_Primitive(argument, "string")
	return typeof key == "symbol" ? key : E·C·M·A·262_String(key) }

Object.defineProperties(Object.setPrototypeOf(E·C·M·A·262_PropertyKey, E·C·M·A·262_Primitive),
	{ prototype:
		{ configurable: false
		, enumerable: false
		, value: Object.create(E·C·M·A·262_Primitive.prototype,
			{ constructor:
				{ configurable: true
				, enumerable: false
				, value: E·C·M·A·262_PropertyKey
				, writable: true } })
		, writable: false }
	, [Symbol.hasInstance]:
		{ configurable: true
		, enumerable: false
		, value: $ => {
			switch ( typeof $ ) {
				case "symbol":
				case "string":
					return true
				default: return false } }
		, writable: true } })
