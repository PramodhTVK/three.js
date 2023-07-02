import { proxy } from "valtio";

const state = proxy({
    intro: true, //Are we in the homepage or not
    color: '#EFBD48' ,//default color
    isLogoTexture: true, //Is the logo currently displayed or not
    isFullTexture: false, //Is the full texture currently displayed or not
    logoDecal: './threejs.png', //Intital logo on shirt
    fullDecal: './threejs.png', //Initial full texture on shirt
})

export default state