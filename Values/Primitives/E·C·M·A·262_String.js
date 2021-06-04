//  @ Piscēs :: Values :: Primitives :: E·C·M·A·262_String.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_PropertyKey from "./E·C·M·A·262_PropertyKey.js"

export default function E·C·M·A·262_String ( argument ) {
	//  Converts the provided value to a string.
	//
	//  This is essentially a re·implementation of ‘ECMAScript §7.1.17 ToString ( argument )’ @ ‹ https://tc39.es/ecma262/#sec-tostring › for use in JavaScript code.
	//
	//  ☞ Note
	//  This function will always return a string; it will throw a TypeError if conversion fails.
	if ( new.target !== undefined ) throw new TypeError ("Strings cannot be constructed with new.")
	if ( typeof argument == "symbol" ) throw new TypeError (`Cannot convert symbol ${ argument } to string.`)
	else return String(argument) }

Object.defineProperties(Object.setPrototypeOf(E·C·M·A·262_String, E·C·M·A·262_PropertyKey),
	{ prototype:
		{ configurable: false
		, enumerable: false
		, value: Object.create(E·C·M·A·262_PropertyKey.prototype,
			{ constructor:
				{ configurable: true
				, enumerable: false
				, value: E·C·M·A·262_String
				, writable: true } })
		, writable: false }
	, [Symbol.hasInstance]:
		{ configurable: true
		, enumerable: false
		, value: $ => typeof $ == "string"
		, writable: true } })
