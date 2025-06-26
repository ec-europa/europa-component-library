import fs from 'node:fs';
import path from 'node:path';
import { copy } from 'fs-extra';
import { globby } from 'globby';

export default async (patterns, from, to) => {
  const paths = await globby(patterns, {
    nodir: true,
    cwd: from,
    followSymbolicLinks: true, // Matches globby 11.0.4 behavior
  });

  for (const file of paths) {
    const input = path.resolve(from, file);
    const dest = path.resolve(to, file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    await copy(input, dest);
  }
};
