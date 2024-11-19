// download some files from latest release of https://github.com/openscad/openscad-wasm/

const url = "https://api.github.com/repos/openscad/openscad-wasm/releases/latest";
const files = [
  "openscad.js",
  "openscad.wasm",
  "openscad.wasm.js",
];
const data = await (await fetch(url)).json();
for (const file of files) {
  console.log(file);
  const url = data.assets.find(i => i.name == file).browser_download_url;
  const bin = new Uint8Array(await (await fetch(url)).arrayBuffer());
  await Deno.writeFile(file, bin);
}
