---
name: add-testimonial
description: Collect a testimonial (name, rating, text, email) and publish it to testimonials.html
---

Collect a new testimonial for the Valuable Feedback, Fast assessment site and publish it to `testimonials.html`.

Work through the following steps in order, waiting for user input at each stage.

**Step 1 — Name**
Ask the user for their name as it should appear on the site.

**Step 2 — Star rating**
Ask the user: "What star rating would you give, from 1 to 5, where 1 is bad and 5 is excellent?" Wait for their reply. Accept any integer from 1 to 5.

**Step 3 — Testimonial text**
Ask the user to share their experience with the assessment in their own words. Limit the contents to 200 words maximum. Let them know it will be published on the site.

**Step 4 — Email**
Ask for their email address. Tell them it's for Bas's records only and won't appear on the page.

**Step 5 — Preview and confirm**
Show a plain-text preview of the testimonial (stars, text, name) and ask the user to confirm it's ready to publish, or ask if they'd like to change anything first.

**Step 6 — Publish**
Insert the following block as the FIRST child element inside `<div class="testimonials-grid" id="testimonials-grid">` in `testimonials.html`. Place it directly after the opening div tag, before the existing comment:

```html
    <div class="tcard">
      <!-- email: {EMAIL} -->
      <div class="tcard-accent"></div>
      <div class="tcard-body">
        <div class="tcard-stars">{STARS}</div>
        <blockquote class="tcard-quote">"{TESTIMONIAL_TEXT}"</blockquote>
        <cite class="tcard-author">— {NAME}</cite>
      </div>
    </div>
```

Where `{STARS}` is filled (★) then empty (☆) stars totalling 5. Examples: 5 stars = `★★★★★`, 4 stars = `★★★★☆`, 3 stars = `★★★☆☆`.

**Step 7 — Confirm**
Tell the user the testimonial is now live on the testimonials page.
