//  @ Piscēs :: Values :: E·C·M·A·262_LanguageValue.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

export default function E·C·M·A·262_LanguageValue ( $ ) {
	//  Every value is already an ECMAScript language value, so this function just returns its argument.
	return new.target === undefined ? $ : Object($) }

Object.defineProperties(E·C·M·A·262_LanguageValue,
	{ call:
		{ configurable: true
		, enumerable: false
		, value: function call ( P, Receiver, ...argumentsList ) {
			if ( typeof this.prototype[P] != "function" ) throw new TypeError (`${ P } is not callable.`)
			return Reflect.apply(this.prototype[P], Receiver, argumentsList) }
		, writable: true }
	, get:
		{ configurable: true
		, enumerable: false
		, value: function get ( P, Receiver = undefined ) { return Reflect.get(this.prototype, P, Receiver) }
		, writable: true }
	, prototype:
		{ configurable: false
		, enumerable: false
		, value: Object.create(null,
			{ constructor:
				{ configurable: true
				, enumerable: false
				, value: E·C·M·A·262_LanguageValue
				, writable: true }
			, type:
				{ configurable: true
				, enumerable: false
				, get: Object.defineProperty(function ( ) {
					//  See ‹ https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values ›.
					if ( this === null ) return "null"
					else {
						const type= typeof this
						return type == "function" ? "object" : type } }, "name", { value: "get type" }) }
			, is:
				{ configurable: true
				, enumerable: false
				, value: function is ( $ ) {
					//  Whether the provided value is the same value as this.
					return Object.is(this, $) }
				, writable: true }
			, "is a prototype of":
				{ configurable: true
				, enumerable: false
				, value: Object.defineProperty(function ( $ ) {
					//  Whether this is in the prototype chain of the provided value.
					//
					//  ☞ Note:
					//  This will always be true for null and always be false for all other primitives.
					return this === null ? true
						: this === undefined ? false
						: Object.prototype.isPrototypeOf.call(this, $) }, "name", { value: "is a prototype of" })
				, writable: true } })
		, writable: false }
	, set:
		{ configurable: true
		, enumerable: false
		, value: function set ( P, V, Receiver = undefined ) { return Reflect.set(this.prototype, P, V, Receiver) }
		, writable: true }
	, [Symbol.hasInstance]:
		{ configurable: true
		, enumerable: false
		, value: $ => true
		, writable: true } })
