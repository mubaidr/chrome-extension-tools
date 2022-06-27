# @crxjs/vite-plugin

## 1.0.13

### Patch Changes

- a8d5670: Fixed the npm link of the npm badge.

## 1.0.12

### Patch Changes

- 0027f1e: Fix manifest icons type

## 1.0.11

### Patch Changes

- dc479d1: Fix global constant replacement in background

## 1.0.10

### Patch Changes

- f35c49e: Update READMEs

## 1.0.9

### Patch Changes

- 8941353: Remove & refactor use of fs-extra

## 1.0.8

### Patch Changes

- 8a09cb9: Optimize rollup input

## 1.0.7

### Patch Changes

- e1604d8: Strip paths from content script resource match patterns

## 1.0.6

### Patch Changes

- 63d102f: Automatically ignores `build.outDir` for server HMR, so the file
  writer doesn't trigger a full reload.

  Fixes flaky HMR updates for content scripts; Tailwind should work fine now 🥳

- a1e2728: Fix isImporter recursion

## 1.0.5

### Patch Changes

- 86adbec: Sometimes during development, an extension page may open before the
  service worker has a chance to control fetch. The HTML file will load from the
  file system, but the script tag might load from the dev server. This PR adds a
  precontroller loader plugin to the dev server so that the extension page will
  reload and the fetch handler will get the real HTML file from the server.

## 1.0.4

### Patch Changes

- b83a4bd: Check for manifest assets first in the project root, then check in
  the public dir. Throw an informative error if the file does not exist in
  either dir.

## 1.0.3

### Patch Changes

- 8b2e587: check service worker on interval from extension page

## 1.0.2

### Patch Changes

- be8a1de: Remove unused code that throws when web accessible resources contains
  an HTML file.

## 1.0.1

### Patch Changes

- d2b4f9e: feat: allow hash in manifest html urls
