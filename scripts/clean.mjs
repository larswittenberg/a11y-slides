#!/usr/bin/env node
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';

const target = resolve('public');

try {
  rmSync(target, { recursive: true, force: true });
} catch (error) {
  console.error(`Failed to remove ${target}:`, error);
  process.exitCode = 1;
}
