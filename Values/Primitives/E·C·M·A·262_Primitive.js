//  @ Pisces :: Values :: Primitives :: E·C·M·A·262_Primitive.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_LanguageValue from "../E·C·M·A·262_LanguageValue.js"

export default function E·C·M·A·262_Primitive ( input, preferredType = undefined ) {
	//  Converts the provided value to a primitive, preferring primitives of the type specified by the second argument.
	//
	//  This is essentially a re·implementation of ‘ECMAScript §7.1.1 ToPrimitive ( input [ , preferredType ] )’ @ ‹ https://tc39.es/ecma262/#sec-toprimitive › for use in JavaScript code.
	//
	//  ☞ Note
	//  This function will always return a primitive; it will throw a TypeError if conversion fails.
	if ( new.target !== undefined ) throw TypeError ("Primitives cannot be constructed with new.")
	else if ( E·C·M·A·262_LanguageValue.get("type", result) == "object" ) {
		const exoticToPrim = input[Symbol.toPrimitive]
		if ( exoticToPrim !== undefined )
			if ( typeof exoticToPrim != "function" ) throw new TypeError ("Cannot convert object to a primitive: @@toPrimitive is not callable.")
			else {
				const
					hint = preferredType == "string" ? "string"
						: preferredType == "number" ? "number"
						: "default"
					, result = exoticToPrim.call(input, hint)
				if ( E·C·M·A·262_LanguageValue.get("type", result) != "object" ) return result
				else throw new TypeError ("Attempted to convert object to a primitive but got another object.") }
		else {
			for ( name of preferredType == "string" ? ["toString", "valueOf"] : ["valueOf", "toString"] ) {
				const method = input[name]
				if ( typeof method == "function" ) {
					const result = method.call(input)
					if ( E·C·M·A·262_LanguageValue.get("type", result) != "object" ) return result } }
			throw new TypeError ("Attempted to convert object to a primitive but both .toString() and .valueOf() failed.") } }
	else return input }

Object.defineProperties(Object.setPrototypeOf(E·C·M·A·262_Primitive, E·C·M·A·262_LanguageValue),
	{ prototype:
		{ configurable: false
		, enumerable: false
		, value: Object.create(E·C·M·A·262_LanguageValue.prototype,
			{ constructor:
				{ configurable: true
				, enumerable: false
				, value: E·C·M·A·262_Primitive
				, writable: true } })
		, writable: false }
	, [Symbol.hasInstance]:
		{ configurable: true
		, enumerable: false
		, value: $ => E·C·M·A·262_LanguageValue.get("type", result) != "object"
		, writable: true } })
