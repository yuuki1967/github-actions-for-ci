!function(t){var e={};function n(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var l in t)n.d(r,l,function(e){return t[e]}.bind(null,l));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\",n(n.s=1)}([function(t,e,n){\"use strict\";n.r(e),n.d(e,\"default\",(function(){return r}));class r{constructor(t,e){this.p1=t,this.p2=e,this.board=[[null,null,null],[null,null,null],[null,null,null]],this.player=Math.random()<.5?this.p1:this.p2,this.sym=\"X\"}turn(t,e){e=e||t,this.board[t][e]=this.sym}nextPlayer(){this.player=this.player===this.p1?this.p2:this.p1,this.sym=\"X\"===this.sym?\"O\":\"X\"}hasWinner(){return this.rowWin()||this.colWin()||this.diagWin()}rowWin(){let t=!1;for(let e=0;e<3;e++){const n=this.board[e];null!==n[0]&&(t=t||n[0]===n[1]&&n[0]===n[2])}return t}colWin(){let t=!1;for(let e=0;e<3;e++){const n=this.board;null!==n[0][e]&&(t=t||n[0][e]===n[1][e]&&n[0][e]===n[2][e])}return t}diagWin(){const t=this.board;return null!==t[0][0]&&t[0][0]===t[1][1]&&t[0][0]===t[2][2]||null!==t[0][2]&&t[0][2]===t[1][1]&&t[0][2]===t[2][0]}}},function(t,e,n){n(2),t.exports=n(0)},function(t,e,n){\"use strict\";n.r(e);var r=n(0);let l,o;for(;!l;)l=window.prompt(\"Enter player 1 name:\");for(;!o&&l!==o;)o=window.prompt(l===o?`Please enter a different name than ${l}.`:\"Enter player 2 name:\");window.onload=()=>{const t=new r.default(l,o),e=document.getElementById(\"turn\"),n=document.getElementById(\"player\");n.innerText=t.player,document.querySelectorAll(\"td\").forEach(r=>{r.onclick=l=>{r.onclick=void 0,l.target.innerText=t.sym,l.target.onclick=void 0;const[o,i]=l.target.classList;t.turn(o,i),t.hasWinner()?(e.innerText=`${t.player} wins!`,document.querySelectorAll(\"td\").forEach(t=>{t.onclick=void 0})):(t.nextPlayer(),n.innerText=t.player)}})}}]);
