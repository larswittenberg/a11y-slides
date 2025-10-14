#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const source = resolve('content/assets');
const destination = resolve('public/assets');

if (!existsSync(source)) {
  console.warn(`Skipping asset copy because the source directory does not exist: ${source}`);
  process.exit(0);
}

mkdirSync(dirname(destination), { recursive: true });

try {
  cpSync(source, destination, { recursive: true, force: true });
} catch (error) {
  console.error(`Failed to copy assets from ${source} to ${destination}:`, error);
  process.exitCode = 1;
}
