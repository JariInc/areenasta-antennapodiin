import { test } from 'node:test';
import assert from 'node:assert/strict';

import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

import { parsePodcastLink } from './index.js'

test('parsing YLE Areena link', (t) => {
  const areenaId = parsePodcastLink('https://areena.yle.fi/podcastit/1-71702235')

  assert.strictEqual(areenaId, '1-71702235');
});