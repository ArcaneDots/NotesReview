import{L as e,S as s}from"./index.1ec16be4.js";import{h as t}from"./vendor.b87ee2e0.js";const n=t.compile('<div class="card" data-note-id="{{id}}">\n  <div class="card-header">\n    {{{badges.user}}}\n    {{{badges.age}}}\n    {{{badges.comments}}}\n    {{#list}}{{{badges.country}}}{{/list}}\n    {{{badges.report}}}\n  </div>\n\n  <div class="card-body text-break">\n    {{{comment}}}\n  </div>\n\n  <div class="card-footer">\n    {{#each actions}}\n      {{#if link}}\n      <a class="btn btn-primary btn-sm my-1 {{class}}" href="{{link}}"\n        {{#remote}}target="remote"{{else}}target="_blank" rel="noopener"{{/remote}}>\n        <svg class="icon"><use xlink:href="#icon-{{icon}}"></use></svg>\n        {{text}}\n      </a>\n      {{else}}\n      <button class="btn btn-primary btn-sm my-1 {{class}}">\n        <svg class="icon"><use xlink:href="#icon-{{icon}}"></use></svg>\n        {{text}}\n      </button>\n      {{/if}}\n    {{/each}}\n  </div>\n</div>\n');const r={map:new class{constructor(){this.cluster=L.markerClusterGroup({maxClusterRadius:40}),this.markers=[],this.map=new e("map"),this.map.addLayer(this.cluster)}add(e,t){let n;n=t.data.status===s.ALL?"open"===e.status?"markers/green.svg":"markers/red.svg":`markers/${e.color}.svg`;const r=L.marker(e.coordinates,{icon:new L.divIcon({html:`<img alt="" src="${n}" class="marker-icon comments-modal-trigger" data-note-id="${e.id}">`,iconSize:[25,40],iconAnchor:[12.5,40],popupAnchor:[0,-30],className:"marker-icon"})});this.markers.push(r)}apply(e){this.map.resize(),this.cluster.clearLayers(),this.cluster.addLayers(this.markers),!e&&this.markers.length>0&&this.map.flyToBounds(this.cluster.getBounds(),1),this.markers=[]}},list:new class{constructor(){this.fragment=new DocumentFragment,this.children=[]}add(e){const s=document.createElement("div");s.classList.add("column","col-4","col-md-6","col-sm-12","p-1"),s.innerHTML=n({list:!0,id:e.id,badges:e.badges,comment:e.comments[0].html,actions:e.actions}),this.fragment.appendChild(s)}apply(){const e=document.getElementById("list");for(;e.lastChild;)e.removeChild(e.lastChild);document.getElementById("list").appendChild(this.fragment)}}};export default class{constructor(e){this.notes=[],this.query=null,this.view=e}set view(e){const s=Object.keys(r);if(!s.includes(e))throw new TypeError(`Argument must be one of ${s.join(", ")}`);this._view={name:e,handler:r[e]},this.reload()}get view(){return this._view.name}show(e,s,t){this.query=s,this.notes=e;const n=e.length,r=e.reduce(((e,s)=>e+s.created.getTime()),0)/n;return e.forEach((e=>{this._view.handler.add(e,s)})),this._view.handler.apply(t),Promise.resolve({amount:n,average:new Date(r)})}get(e){return this.notes.find((s=>s.id===e))}update(e,s){const t=this.notes.findIndex((s=>s.id===e));if(-1===t)throw new Error(`The note with the id ${e} could not be found in the array`);return this.notes[t]=s,this.reload()}reload(){return this.show(this.notes,this.query,!0)}}
