//  @ Piscēs :: Values :: Primitives :: E·C·M·A·262_Number.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_Numeric from "./E·C·M·A·262_Numeric.js"

export default function E·C·M·A·262_Number ( $ ) {
	//  Converts the provided value to a number.
	//
	//  This is essentially a re·implementation of ‘ECMAScript §7.1.1 ToNumber ( value )’ @ ‹ https://tc39.es/ecma262/#sec-tonumber › for use in JavaScript code.
	//
	//  ☞ Note
	//  This function will always return a number; it will throw a TypeError if conversion fails.
	if ( new.target != null ) throw TypeError ("Numbers cannot be constructed with new.")
	else return +$ }

Object.defineProperties(Object.setPrototypeOf(E·C·M·A·262_Number, E·C·M·A·262_Numeric),
	{ prototype:
		{ configurable: false
		, enumerable: false
		, value: Object.create(E·C·M·A·262_Numeric.prototype,
			{ constructor:
				{ configurable: true
				, enumerable: false
				, value: E·C·M·A·262_Number
				, writable: true } })
		, writable: false }
	, [Symbol.hasInstance]:
		{ configurable: true
		, enumerable: false
		, value: $ => typeof $ == "number"
		, writable: true } })
