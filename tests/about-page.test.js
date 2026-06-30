import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const read = (file) => readFileSync(join(root, file), 'utf8');

test('about.html exists', () => {
  assert.ok(existsSync(join(root, 'about.html')));
});

test('about.html has a dark-gradient hero section', () => {
  const html = read('about.html');
  assert.match(html, /<header class="hero">/);
});

test('about.html marks the About nav link as active', () => {
  const html = read('about.html');
  assert.match(html, /href="about\.html" class="nav-link active">About<\/a>/);
});

test('about.html nav contains links to all other pages', () => {
  const html = read('about.html');
  assert.match(html, /href="valuable-feedback-fast-assessment\.html"/);
  assert.match(html, /href="resources\.html"/);
  assert.match(html, /href="testimonials\.html"/);
});

test('every existing page nav includes a link to about.html', () => {
  const pages = [
    'valuable-feedback-fast-assessment.html',
    'resources.html',
    'testimonials.html',
    'contact.html',
  ];
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /href="about\.html"/, `${page} is missing an About nav link`);
  }
});

