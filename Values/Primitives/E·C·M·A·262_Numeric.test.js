#!/usr/bin/env -S deno test
//  @ Piscēs :: Values :: Primitives :: E·C·M·A·262_Numeric.test.js
//
//  Copyright © 2020–2021 Margaret KIBI (kibigo!).
//
//  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
//  If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.

import E·C·M·A·262_Numeric from "./E·C·M·A·262_Numeric.js"
import { assert, assertStrictEquals, assertThrows } from "../../dev_deps.js"

Deno.test(`Calling E·C·M·A·262_Numeric returns a bigint when called with a bigint.`, ( ) => assertStrictEquals(E·C·M·A·262_Numeric(1024n), 1024n))

Deno.test(`Calling E·C·M·A·262_Numeric returns a number otherwise.`, ( ) => [ "", "1", 2, { foo: 3 }, 4/0, false, true, undefined, null ].forEach(value => assert(Object.is(E·C·M·A·262_Numeric(value), +value))))

Deno.test(`Constructing E·C·M·A·262_Numeric throws.`, ( ) => assertThrows(( ) => new E·C·M·A·262_Numeric))

Deno.test(`instanceof E·C·M·A·262_Numeric returns true for numerics.`, ( ) => [ 69, 420n ].forEach(value => assert(value instanceof E·C·M·A·262_Numeric)))

Deno.test(`instanceof E·C·M·A·262_Numeric returns false for others.`, ( ) => [ undefined, null, true, "17", { }, [ ], ( ) => { }, new Proxy ({ }, { }) ].forEach(value => assert(!(value instanceof E·C·M·A·262_Numeric))))
