import { buildSync } from "esbuild";
import { join } from "path";

export function buildPacakage(rootDir: string) {
  console.log("Building package");

  const entryPoint = join(rootDir, "index.ts");
  const cjsOutput = join(rootDir, "dist/cjs");
  const esmOutput = join(rootDir, "dist/esm");

  buildSync({
    entryPoints: [entryPoint],
    outdir: cjsOutput,
    bundle: true,
    platform: "node",
    format: "cjs",
    target: ["node14", "node16"],
    inject: [join(__dirname, "./react-shim.ts")],
    loader: { ".ts": "tsx" },
  });

  buildSync({
    entryPoints: [entryPoint],
    outdir: esmOutput,
    bundle: true,
    platform: "node",
    format: "esm",
    target: ["node14", "node16"],
    inject: [join(__dirname, "./react-shim.ts")],
    loader: { ".ts": "tsx" },
  });

  console.log("Package built succesfully!");
}
