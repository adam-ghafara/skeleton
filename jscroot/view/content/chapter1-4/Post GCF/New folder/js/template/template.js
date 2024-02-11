export let URLGeoJson = "https://asia-southeast2-idyllic-gear-412410.cloudfunctions.net/func-loadgis";
export let URLPostPoint = "";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`