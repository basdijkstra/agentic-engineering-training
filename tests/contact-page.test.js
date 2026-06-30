import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const read = (file) => readFileSync(join(root, file), 'utf8');

test('contact.html exists', () => {
  assert.ok(existsSync(join(root, 'contact.html')));
});

test('contact.html has a dark-gradient hero section', () => {
  const html = read('contact.html');
  assert.match(html, /<header class="hero">/);
});

test('contact.html marks the Contact nav link as active', () => {
  const html = read('contact.html');
  assert.match(html, /href="contact\.html" class="nav-link active">Contact<\/a>/);
});

test('contact.html contains LinkedIn link', () => {
  const html = read('contact.html');
  assert.match(html, /linkedin\.com\/in\/basdijkstra/);
});

test('contact.html contains ontestautomation.com/contact link', () => {
  const html = read('contact.html');
  assert.match(html, /ontestautomation\.com\/contact/);
});

test('contact.html footer link has rel="noopener"', () => {
  const html = read('contact.html');
  assert.match(html, /ontestautomation\.com" target="_blank" rel="noopener"/);
});

test('contact.html decorative SVGs have aria-hidden="true"', () => {
  const html = read('contact.html');
  const svgMatches = [...html.matchAll(/<svg[^>]*>/g)];
  for (const match of svgMatches) {
    assert.match(match[0], /aria-hidden="true"/, `SVG missing aria-hidden: ${match[0]}`);
  }
});

test('every existing page nav includes a link to contact.html', () => {
  const pages = [
    'valuable-feedback-fast-assessment.html',
    'resources.html',
    'testimonials.html',
    'about.html',
  ];
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /href="contact\.html"/, `${page} is missing a Contact nav link`);
  }
});
