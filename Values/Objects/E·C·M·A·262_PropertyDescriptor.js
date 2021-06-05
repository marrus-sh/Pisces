//  @ Piscēs :: Values :: Objects :: E·C·M·A·262_PropertyDescriptor.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_LanguageValue from "../E·C·M·A·262_LanguageValue.js"
import E·C·M·A·262_Object from "./E·C·M·A·262_Object.js"

export default class E·C·M·A·262_PropertyDescriptor extends E·C·M·A·262_Object {
	constructor ( $ ) {
		//  Converts the provided value to a property descriptor object, or returns it if it is undefined.
		//
		//  This is essentially the same as running ‘ECMAScript §6.2.5.4 FromPropertyDescriptor ( Desc )’ @ ‹ https://tc39.es/ecma262/#sec-frompropertydescriptor › followed by ‘ECMAScript §6.2.5.5 ToPropertyDescriptor ( Obj )’ @ ‹ https://tc39.es/ecma262/#sec-topropertydescriptor ›.
		//
		//  ☞ Note
		//  This function will always return a property descriptor; it will throw a TypeError if conversion fails.
		//  The property descriptor may not be complete; get .completed to get a complete property descriptor.
		//
		//  ☞ Note
		//  You don’t have to convert to a property descriptor in order to use an object as one.
		//  You need only make sure that .get and set, if defined on the object, are functions, and that the object is not both an accessor descriptor and a data descriptor.
		//  E·C·M·A·262_PropertyDescriptor[Symbol.hasInstance]() does these checks for you.
		if ( E·C·M·A·262_LanguageValue.get("type", $) != "object" ) throw new TypeError ("Cannot create property descriptor from primative.")
		else {
			const desc= { }
			if ( "enumerable" in $ ) Object.defineProperty(desc, "enumerable",
				{ configurable: true
				, enumerable: true
				, value: !!$.enumerable
				, writable: true })
			if ( "configurable" in $ ) Object.defineProperty(desc, "configurable",
				{ configurable: true
				, enumerable: true
				, value: !!$.configurable
				, writable: true })
			if ( "value" in $ ) Object.defineProperty(desc, "value",
				{ configurable: true
				, enumerable: true
				, value: $.value
				, writable: true })
			if ( "writable" in $ ) Object.defineProperty(desc, "writable",
				{ configurable: true
				, enumerable: true
				, value: !!$.writable
				, writable: true })
			if ( "get" in $ ) {
				const getter= $.get
				if ( typeof getter != "function" && getter !== undefined ) throw new TypeError ("Cannot create property descriptor: Getter not callable.")
				else Object.defineProperty(desc, "get",
					{ configurable: true
					, enumerable: true
					, value: getter
					, writable: true }) }
			if ( "set" in $ ) {
				const setter= $.set
				if ( typeof setter != "function" && setter !== undefined ) throw new TypeError ("Cannot create property descriptor: Setter not callable.")
				else Object.defineProperty(desc, "set",
					{ configurable: true
					, enumerable: true
					, value: setter
					, writable: true }) }
			if ( (desc.hasOwnProperty("get") || desc.hasOwnProperty("set")) && (desc.hasOwnProperty("value") || desc.hasOwnProperty("writable")) ) throw new TypeError ("Cannot create property with both accessor and data descriptors.")
			else return desc } }
	get completed ( ) {
		//  Converts this to a new complete property descriptor.
		//
		//  See ‘ECMAScript §6.2.5.1 CompletePropertyDescriptor ( Desc )’ @ ‹ https://tc39.es/ecma262/#sec-completepropertydescriptor ›.
		const desc= new E·C·M·A·262_PropertyDescriptor (this)
		if ( E·C·M·A·262_PropertyDescriptor.get("is data descriptor", desc) || E·C·M·A·262_PropertyDescriptor.get("is generic descriptor", desc) ) {
			if ( !desc.hasOwnProperty("value") ) Object.defineProperty(desc, "value",
				{ configurable: true
				, enumerable: true
				, value: undefined
				, writable: true })
			if ( !desc.hasOwnProperty("writable") ) Object.defineProperty(desc, "writable",
				{ configurable: true
				, enumerable: true
				, value: false
				, writable: true }) }
		else {
			if ( !desc.hasOwnProperty("get") ) Object.defineProperty(desc, "get",
				{ configurable: true
				, enumerable: true
				, value: undefined
				, writable: true })
			if ( !desc.hasOwnProperty("set") ) Object.defineProperty(desc, "set",
				{ configurable: true
				, enumerable: true
				, value: undefined
				, writable: true }) }
		if ( !desc.hasOwnProperty("enumerable") ) Object.defineProperty(desc, "enumerable",
			{ configurable: true
			, enumerable: true
			, value: false
			, writable: true })
		if ( !desc.hasOwnProperty("configurable") ) Object.defineProperty(desc, "configurable",
			{ configurable: true
			, enumerable: true
			, value: false
			, writable: true })
		return desc }
	get "getter" ( ) {
		if ( this === undefined || !("get" in this) ) return undefined
		else {
			const getter= this.get
			if ( getter === undefined || typeof getter == "function" ) return getter
			else throw new TypeError ("Cannot get getter: Getter not callable.") } }
	get "is accessor descriptor" ( ) {
		//  See ‘ECMAScript §6.2.5.1 IsAccessorDescriptor ( Desc )’ @ ‹ https://tc39.es/ecma262/#sec-isaccessordescriptor ›.
		return this === undefined ? false : "get" in this || "set" in this }
	get "is configurable" ( ) { return this === undefined || !("configurable" in this) ? undefined : !!this.configurable }
	get "is data descriptor" ( ) {
		//  See ‘ECMAScript §6.2.5.1 IsDataDescriptor ( Desc )’ @ ‹ https://tc39.es/ecma262/#sec-isdatadescriptor ›.
		return this === undefined ? false : "value" in this || "writable" in this }
	get "is enumerable" ( ) { return this === undefined || !("enumerable" in this) ? undefined : !!this.enumerable }
	get "is generic descriptor" ( ) {
		//  See ‘ECMAScript §6.2.5.1 IsGenericDescriptor ( Desc )’ @ ‹ https://tc39.es/ecma262/#sec-isgenericdescriptor ›.
		return this === undefined ? false : !("get" in this || "set" in this || "value" in this || "writable" in this) }
	get "is writable" ( ) { return this === undefined || !("writable" in this) ? undefined : !!this.writable }
	get "setter" ( ) {
		if ( this === undefined || !("set" in this) ) return undefined
		else {
			const setter= this.set
			if ( setter === undefined || typeof setter == "function" ) return setter
			else throw new TypeError ("Cannot get setter: Setter not callable.") } }
	get "value" ( ) { return this === undefined || !("value" in this) ? undefined : this.value }
	static [Symbol.hasInstance] ( $ ) { return E·C·M·A·262_LanguageValue.get("type", $) == "object" && !("get" in $ && (typeof $.get != "function" || "value" in $ || "writable" in $) || "set" in $ && (typeof $.set != "function" || "value" in $ || "writable" in $)) } }
