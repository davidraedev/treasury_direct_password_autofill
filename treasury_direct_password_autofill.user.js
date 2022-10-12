// ==UserScript==
// @name         Treasury Direct Password Auto-fill
// @namespace    treasury_direct_password_autofill
// @description  Allow autofilling/pasting passwords into Treasury Direct
// @version      1
// @grant        none
// @include      https://www.treasurydirect.gov/RS/PW-Display.do
// @homepageURL  https://github.com/davidraedev/treasury_direct_password_autofill
// ==/UserScript==

document.querySelector( ".pwordinput" ).readOnly = false;
