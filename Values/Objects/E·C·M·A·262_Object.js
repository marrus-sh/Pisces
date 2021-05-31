//  @ Pisces :: Objects :: E·C·M·A·262_Object.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_LanguageValue from "../E·C·M·A·262_LanguageValue.js"

export default class E·C·M·A·262_Object extends E·C·M·A·262_LanguageValue {
	constructor ( $ ) {
		//  Converts the provided value to an object.
		//
		//  This is essentially a re·implementation of ‘ECMAScript §7.1.18 ToObject ( argument )’ @ ‹ https://tc39.es/ecma262/#sec-toobject › for use in JavaScript code.
		//
		//  ☞ Note
		//  This function will always return an object; it will throw a TypeError if conversion fails.
		if ( $ == null ) throw new TypeError (`Can’t convert ${ $ } to an object.`)
		else return Object($) }
	get "is extensible" ( ) { return Object.isExtensible(this) }
	set "is extensible" ( $ ) {
		if ( $ && !Object.isExtensible(this) ) throw new TypeError ("Can’t make non·extensible object extensible.")
		else if ( !$ ) Object.preventExtensions(this) }
	get "is frozen" ( ) { return Object.isFrozen(this) }
	set "is frozen" ( $ ) {
		if ( !$ && Object.isFrozen(this) ) throw new TypeError ("Can’t make frozen object unfrozen.")
		else if ( $ ) Object.freeze(this) }
	get "is sealed" ( ) { return Object.isSealed(this) }
	set "is sealed" ( $ ) {
		if ( !$ && Object.isSealed(this) ) throw new TypeError ("Can’t make sealed object unsealed.")
		else if ( $ ) Object.seal(this) }
	get "live property descriptors" ( ) { throw new TypeError ("Live property descriptor support requires E·C·M·A·262_PropertyDescriptor.") }
	get "own entries" ( ) { return Object.entries(this) }
	get "own entry keys" ( ) { return Object.keys(this) }
	get "own entry values" ( ) { return Object.values(this) }
	get "own keys" ( ) { return Reflect.ownKeys(this) }
	get "own names" ( ) { return Object.getOwnPropertyNames(this) }
	get "own property descriptors" ( ) { return Object.getOwnPropertyDescriptors(this) }
	get "own symbols" ( ) { return Object.getOwnPropertySymbols(this) }
	get prototype ( ) { return Object.getPrototypeOf(this) }
	set prototype ( $ ) { Object.setPrototypeOf(this, $) }
	static [Symbol.hasInstance] ( $ ) { return E·C·M·A·262_LanguageValue.get("type", result) == "object" } }
