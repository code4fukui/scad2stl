import OpenScad from "./openscad.js";

const instance = await OpenScad({ noInitialRun: true });

instance.FS.writeFile("/input.scad", `cube(10);`);
instance.callMain(["/input.scad", "-o", "cube.stl"]);
const output = instance.FS.readFile("/cube.stl");
await Deno.writeFile("cube.stl", output);
