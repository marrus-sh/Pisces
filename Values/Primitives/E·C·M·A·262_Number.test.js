#!/usr/bin/env -S deno test
//  @ Piscēs :: Values :: Primitives :: E·C·M·A·262_Number.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_Number from "./E·C·M·A·262_Number.js"
import { assert, assertThrows } from "../../dev_deps.js"

Deno.test(`Calling E·C·M·A·262_Number throws when called with a bigint.`, ( ) => assertThrows(( ) => E·C·M·A·262_Number(1024n)))

Deno.test(`Calling E·C·M·A·262_Number returns a number otherwise.`, ( ) => [ "", "1", 2, { foo: 3 }, 4/0, false, true, undefined, null ].forEach(value => assert(Object.is(E·C·M·A·262_Number(value), +value))))

Deno.test(`Constructing E·C·M·A·262_Number throws.`, ( ) => assertThrows(( ) => new E·C·M·A·262_Number))

Deno.test(`instanceof E·C·M·A·262_Number returns true for numbers.`, ( ) => assert(24 instanceof E·C·M·A·262_Number))

Deno.test(`instanceof E·C·M·A·262_Numeric returns false for others.`, ( ) => [ undefined, null, true, "17", 23n, { }, [ ], ( ) => { }, new Proxy ({ }, { }) ].forEach(value => assert(!(value instanceof E·C·M·A·262_Number))))
