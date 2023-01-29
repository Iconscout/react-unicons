import {defineConfig, Options} from 'tsup'

const commonConfig: Options = {
    outDir: 'dist',
    // clean: true,
    format: ['cjs', 'esm'],
    dts: true
}

export default defineConfig([
    {
        entry: ['src/icons/**/*.tsx'],
        ...commonConfig,
        outDir: 'dist/icons'
    },
    {
        entry: ['src/index.ts'],
        ...commonConfig,
        esbuildOptions(options) {
            // the directory structure will be the same as the source
            options.outbase = "./src";
        },
        bundle: false
    }])