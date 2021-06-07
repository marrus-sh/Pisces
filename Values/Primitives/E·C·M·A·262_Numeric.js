//  @ Piscēs :: Values :: Primitives :: E·C·M·A·262_Numeric.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_Primitive from "./E·C·M·A·262_Primitive.js"

export default function E·C·M·A·262_Numeric ( $ ) {
	//  Converts the provided value to a numeric, either a big·int or a number.
	//
	//  This is essentially a re·implementation of ‘ECMAScript §7.1.1 ToNumeric ( value )’ @ ‹ https://tc39.es/ecma262/#sec-tonumeric › for use in JavaScript code.
	//
	//  ☞ Note
	//  This function will always return a numeric; it will throw a TypeError if conversion fails.
	if ( new.target != null ) throw TypeError ("Numerics cannot be constructed with new.")
	else {
		let primValue =  E·C·M·A·262_Primitive($)
		return typeof primValue == "bigint" ? primValue : +primValue } }

Object.defineProperties(Object.setPrototypeOf(E·C·M·A·262_Numeric, E·C·M·A·262_Primitive),
	{ prototype:
		{ configurable: false
		, enumerable: false
		, value: Object.create(E·C·M·A·262_Primitive.prototype,
			{ constructor:
				{ configurable: true
				, enumerable: false
				, value: E·C·M·A·262_Numeric
				, writable: true } })
		, writable: false }
	, [Symbol.hasInstance]:
		{ configurable: true
		, enumerable: false
		, value: $ => typeof $ == "bigint" || typeof $ == "number"
		, writable: true } })
