import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "https://asia-southeast2-idyllic-gear-412410.cloudfunctions.net/func-loadgis";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#TYPE#</td>
<td>#NAME#</td>
<td>#KORDINAT#</td>
`

export function responseData(results){
    // console.log(results.features);
    // Addlayer()
    console.log(results);
    results.forEach(isiRow);
    results.forEach(isiRowPoint);
    results.forEach(isiRowPolygon);
    results.forEach(isiRowPolyline);
}

export function isiRow(value) {
    let content = tableTemplate
        .replace("#TYPE#", value.geometry.type)
        .replace("#NAME#", value.properties.name)
        .replace("#KORDINAT#", JSON.stringify(value.geometry.coordinates));
    console.log(content);
    addChild("lokasi", tableTag, tableRowClass, content);
}

export function isiRowPoint(value){
    if (value.geometry.type === "Point") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("lokasi",tableTag,tableRowClass,content);
    }
}

export function isiRowPolygon(value){
    if (value.geometry.type === "Polygon") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("polygon",tableTag,tableRowClass,content);
    }
}

export function isiRowPolyline(value){
    if (value.geometry.type === "LineString") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("line",tableTag,tableRowClass,content);
    }
}

export function Addlayer() {

    function showAlertOnEveryClick() {
        alert("Returned : " + currentURL + " is not allowed to access this page.");
      }
    function getCurrentURL() {
        const currentURL = window.location.href;
        return currentURL;
      }
      
      const currentURL = getCurrentURL();
      console.log(currentURL);
    const allowedDomain = ["https://github.com/adam-ghafara/skeleton/", "https://github.com/adam-ghafara/skeleton/index.html", "https://github.com/adam-ghafara/skeleton/Post%20GCF/index.html", "https://github.com/adam-ghafara/skeleton/Post%20GCF/", "https://github.com/adam-ghafara/skeleton/openlayers", "https://github.com/adam-ghafara/skeleton/openlayers/index.html"];
  
    if (!currentURL.includes(allowedDomain)) {
        showAlertOnEveryClick();
    }
  }