import OpenScad from "./openscad.js";

if (Deno.args.length < 1) {
  console.log("scad2stl [*.scad]");
  Deno.exit(1);
}
const fnscad = Deno.args[0];
const scad = await Deno.readTextFile(fnscad);
const fnstl = fnscad.substring(0, fnscad.length - 4) + "stl";

const instance = await OpenScad({ noInitialRun: true });
instance.FS.writeFile("/input.scad", scad);
instance.callMain(["/input.scad", "-o", "output.stl"]);
const output = instance.FS.readFile("/output.stl");
await Deno.writeFile(fnstl, output);
