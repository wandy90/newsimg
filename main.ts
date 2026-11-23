// News image entry (Node 22, standard library only): the summary image is
// baked into this repository, and this program copies it to the grader's
// output directory. No network is needed at run time, so the copy is
// deterministic: two runs write byte-identical output. The bundled file is
// JPEG bytes under the entry.png name; the gate tells PNG from JPEG by the
// file's first bytes, and the name stays entry.png either way.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(
  fileURLToPath(new URL('./entry.png', import.meta.url)),
  join(outDir, 'entry.png'),
);
