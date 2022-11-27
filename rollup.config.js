import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import json from './package.json' assert { type: "json" };

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: json.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      scss({
        runtime: import("sass"),
        output: false,
        prefix: `@import "./src/styles.scss";`,
      }),
      copy({
        targets: [
          { src: 'src/_styles.scss', dest: 'dist' },
          { src: 'src/themes/**/*', dest: 'dist/themes' }
        ]
      })
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
    plugins: [
      dts(),
    ],
  },
]
