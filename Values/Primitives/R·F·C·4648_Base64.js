//  @ Piscēs :: Values :: Primitives :: R·F·C·4648_Base64.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_String from "./E·C·M·A·262_String.js"

export default function R·F·C·4648_Base64 ( $, ...$s ) {
	//  Converts the provided value to a base64 string.
	//  If the provided value is a DataView, ArrayBuffer, or typed array, its bytes will be used when generate the base64; otherwise, the string value of the provided value will be used.
	//  As a special case, a nullish argument will be treated as an ArrayBuffer of zero bytes.
	//
	//  See ‹ https://datatracker.ietf.org/doc/html/rfc4648#section-4 ›.
	//  Compare also ‹ https://infra.spec.whatwg.org/#forgiving-base64-encode ›.
	//
	//  String values are encoded as ECMAScript strings; i.e. UTF‐16BE.
	//
	//  ☞ Note
	//  You can also use this function to tag a template literal.
	//  The literal will be interpreted using `String.raw`.
	if ( new.target !== undefined ) throw new TypeError ("Base64 strings cannot be constructed with new.")
	else {
		const
			buffer= $ == null ? new ArrayBuffer
				: $ instanceof ArrayBuffer ? $
				: $ instanceof DataView || $ instanceof Object.getPrototypeOf(Uint8Array) ? $.buffer
				: (string => Array.prototype.reduce.call(string, ( result, code·unit, index ) => (result.setUint16(index * 2, code·unit.charCodeAt(0)), result), new DataView (new ArrayBuffer (string.length * 2))).buffer)(typeof $ == "string" ? $
					: $.hasOwnProperty("raw") ? String.raw($, ...$s)
					: String($))
			, dataView= new DataView (buffer)
			, lengthOfBuffer= buffer.byteLength
			, minimumLengthOfResults= Math.ceil(lengthOfBuffer * 4 / 3)
			, results= new Array (minimumLengthOfResults + (4 - (minimumLengthOfResults % 4)) % 4).fill(61)  //  the second ‹ % 4 › is necessary where minimumLengthOfResults % 4 == 0
		for ( let variableIndex= 0 ; variableIndex < lengthOfBuffer ; ) {
			const
				possibleIndexOfResult= Math.ceil(variableIndex * 4 / 3)
				, indexOfResult= possibleIndexOfResult + +(variableIndex % 3 == 0 && results[possibleIndexOfResult] != 61)
				, remainder= indexOfResult % 4
				, u6= remainder == 0 ? dataView.getUint8(variableIndex) >> 2
					: remainder == 1 ? ((dataView.getUint8(variableIndex++) & 0x3) << 4) + (variableIndex < lengthOfBuffer ? dataView.getUint8(variableIndex) >> 4 : 0)
					: remainder == 2 ? ((dataView.getUint8(variableIndex++) & 0xF) << 2) + (variableIndex < lengthOfBuffer ? dataView.getUint8(variableIndex) >> 6 : 0)
					: dataView.getUint8(variableIndex++) & 0x3F
			results[indexOfResult]= u6 < 26 ? u6 + 65
				: u6 < 52 ? u6 + 71
				: u6 < 62 ? u6 - 4
				: u6 < 63 ? 43
				: u6 < 64 ? 47
				: 0xFFFD }
		return String.fromCharCode(...results) } }

Object.defineProperties(Object.setPrototypeOf(R·F·C·4648_Base64, E·C·M·A·262_String),
	{ prototype:
		{ configurable: false
		, enumerable: false
		, value: Object.create(E·C·M·A·262_String.prototype,
			{ constructor:
				{ configurable: true
				, enumerable: false
				, value: E·C·M·A·262_String
				, writable: true }
			, data:
				{ configurable: true
				, enumerable: false
				, get: Object.defineProperty(function ( ...$s ) {
					//  Returns the data of this base64 string.
					//
					//  See ‹ https://datatracker.ietf.org/doc/html/rfc4648#section-4 ›.
					//  See also ‹ https://infra.spec.whatwg.org/#forgiving-base64-decode ›
					//
					//  ☞ Note
					//  You can also use this getter to tag a template literal (via ‹ R·F·C·4648_Base64.get.bind("data") ›).
					//  The literal will be interpreted using `String.raw`.
					const
						source= (typeof this == "string" ? this
							: this == null ? ""
							: this.hasOwnProperty("raw") ? String.raw(this, ...$s)
							: String(this)).replace(/[\t\n\f\r ]+/gu, "")
						, u6·s= Array.prototype.map.call(
							(source.length % 4 == 0 ? source.replace(/={1,2}$/u, "") : source)
							, code·unit => {
								const code= code·unit.charCodeAt(0)
								if ( code >= 0x41 && code <= 0x5A ) return code - 65
								else if ( code >= 0x61 && code <= 0x7A ) return code - 71
								else if ( code >= 0x30 && code <= 0x39 ) return code + 4
								else if ( code == 0x2B ) return 62
								else if ( code == 0x2F ) return 63
								else throw new RangeError ("Cannot get data: String not base64.") })
						, length= u6·s.length
						, dataView= new DataView (new ArrayBuffer (Math.floor(length * 3 / 4)))
					if ( length % 4 == 1 ) throw new RangeError ("Cannot get data: String not base64.")
					for ( let variableIndex= 0 ; variableIndex < length - 1 ; ) {
						const
							indexOfResult= Math.ceil(variableIndex * 3 / 4)
							, remainder= indexOfResult % 3
						if ( remainder == 0 ) dataView.setUint8(indexOfResult, (u6·s[variableIndex++] << 2) + (u6·s[variableIndex] >> 4))
						else if ( remainder == 1 ) dataView.setUint8(indexOfResult, ((u6·s[variableIndex++] & 0xF) << 4) + (u6·s[variableIndex] >> 2))
						else dataView.setUint8(indexOfResult, ((u6·s[variableIndex++] & 0x3) << 6) + u6·s[variableIndex++]) }
					return dataView.buffer }, "name", { value: "get data" }) } })
		, writable: false }
	, [Symbol.hasInstance]:
		{ configurable: true
		, enumerable: false
		, value: $ => {
			if ( typeof $ != "string" ) return false
			const
				source= $.replace(/[\t\n\f\r ]+/gu, "")
				, trimmed= source.length % 4 == 0 ? source.replace(/={1,2}$/u, "") : source
			return trimmed.length % 4 != 1 && !/[^0-9A-Za-z+\/]/u.test(trimmed) }
		, writable: true } })
