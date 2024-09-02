// TODO: use typescript
// import type { Config } from 'tailwindcss/types/config';
/**
 * @typedef {import('tailwindcss/types/config').Config} Config
 */

import { join } from 'path';

import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { nextui } from '@nextui-org/react';

import { nextuiConfig } from '../defs';

/**
 * Generates a Tailwind CSS configuration object based on the provided directory.
 * This function dynamically sets the paths and other configurations needed for Tailwind to function properly in a given project structure.
 *
 * @param {string} dirname - The directory name where the Tailwind configuration will be applied. This is typically the root of your project.
 * @returns {Config} The Tailwind CSS configuration object customized for the provided directory.
 */
export function generateTailwindConfig(dirname) {
  const workspaceRoot = join(dirname, '../../');
  const projectRoot = dirname;

  return {
    content: [
      // next.js app
      ...createGlobPatternsForDependencies(projectRoot),
      join(
        projectRoot,
        '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
      ),
      // lib/*
      join(
        workspaceRoot,
        'lib/*/',
        '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
      ),
      // next-ui preset
      join(
        workspaceRoot,
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
      ),
    ],
    theme: {
      extend: {},
    },
    plugins: [nextui(nextuiConfig)],
    darkMode: 'class',
  };
}
