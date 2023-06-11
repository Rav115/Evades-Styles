// ==UserScript==
// @name         Evades Style
// @version      0.1
// @description  Made By TheTroll
// @author       TheTroll
// @match       https://*.evades.io/*
// @match       https://*.evades.online/*
// @match       https://*evades.io/*
// @match       https://*evades.online/*
// @match       https://*localhost/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=evades.io
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

    GM_addStyle ( `
div.hall-of-fame-players {  width: 380px !important;  padding-bottom : 3100px !important;}
div.hall-of-fame-player {    width: 300px !important;    text-align: center !important;    margin-left: 25px !important;}
div.hall-of-fame {  width: 350px !important;}
div.changelog {  height: 3330px !important;  margin-top: 0px !important;  margin-left: -50px !important;}
div.server-browser-box {    height: 320px !important;}
div.game-server-row {  margin-bottom: -10px !important;}
div.profile-weeks-container {  height: 2000px !important;}
div.run-entry {  display: grid;  width: 1000px !important;}
div.runs-list {  width: 1050px !important;  height: 1700px !important;}
div.hero-select-heroes-container {    width: 1700px !important;  padding-left: -px !important;  margin-left: -300px !important;}
#changelogs {  margin-left: -px;  border-left-width: -px !important;  border-style: none !important;}
div.ts-links {  padding-bottom: 300px !important;  margin-left: -50px !important;  overflow-y: hidden !important;}
div.ts-changelog {  padding-bottom: 3080px !important;  padding-left: -px !important;  border-left-width: -px !important;  margin-left: -50px !important;}
#chlbuttons {  margin-left: -50px !important;}
 ` );
