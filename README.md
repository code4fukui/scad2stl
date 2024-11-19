# scad2stl

scad2stl is a command line program to convert from OpenSCAD file (*.scad) to STL (Standard Triangle Language) as 3D model using openscad.js from [OpenSCAD WASM Port](https://github.com/openscad/openscad-wasm) on [Deno](https://deno.com/)

## install

install [Deno](https://deno.com/)

```sh
deno install --global -A scad2stl.js
```

## uninstall 

```sh
deno uninstall --global scad2stl.js
```

## openscad.js

```js
import OpenScad from "https://code4fukui.github.io/scad2stl/openscad.js";

const instance = await OpenScad({ noInitialRun: true });

instance.FS.writeFile("/input.scad", `cube(10);`);
instance.callMain(["/input.scad", "-o", "cube.stl"]);
const output = instance.FS.readFile("/cube.stl");
console.log(output);
```

## download latest OpenSCAD WASM

```sh
deno run -A download-latest-release-openscad.js
```
