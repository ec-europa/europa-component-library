import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import twing from 'twing';

const { createEnvironment, createFilesystemLoader } = twing;

// Use the same Twing version as Storybook with an asynchronous Node filesystem
// loader so the existing Promise-based test helpers retain their API.
// Resolve from the module's filesystem location. The new URL(relative,
// import.meta.url) form is treated as an asset URL by Vite's transforms.
const sourceRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const componentPath = path.resolve(sourceRoot, 'components');
const loader = createFilesystemLoader(fs);

loader.addPath(componentPath);
// Twing 7 matches the namespace literally, including the leading @.
loader.addPath(componentPath, '@ecl');
loader.addPath(path.resolve(sourceRoot, 'compositions'), '@ecl');
loader.addPath(path.resolve(sourceRoot, 'page-example'), '@ecl');

// Twing 7 leaves autoescaping disabled when autoEscapingStrategy is omitted,
// matching the previous environment's autoescape: false setting.
export default createEnvironment(loader);
