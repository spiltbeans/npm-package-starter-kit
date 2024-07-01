import typescript from "@rollup/plugin-typescript"
import { dts } from "rollup-plugin-dts"

import package_details from "./package.json"

const outputConfig = {
    dir: "dist/esm",
    format: "es",
    exports: "named",
    generatedCode: {
        constBindings: true,
    },
    preserveModules: true,
    entryFileNames: "[name].mjs",
}
export default [
    // build the CommonJS Module code
    {
        input: "src/index.ts",
        output: [
            {
                ...outputConfig,
                dir: "dist/cjs",
                format: "cjs",
                entryFileNames: "[name].cjs",
            },
        ],
        plugins: [
            typescript({
                compilerOptions: { declaration: false, outDir: "dist/cjs" },
            }),
        ],
    },
    // build the ESModule code
    {
        input: "src/index.ts",
        output: [
            {
                ...outputConfig,
            },
        ],
        plugins: [
            typescript({
                compilerOptions: { declaration: false, outDir: "dist/esm" },
            }),
        ],
    },
    // this config will bundle the type declaration files
    // emitted during the `build:declarations` step
    {
        input: "./dist/declarations/index.d.ts",
        output: [{ file: package_details.types, format: "es" }],
        plugins: [dts()],
    },
]
