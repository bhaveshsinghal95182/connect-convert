# Updating blogs

This website loads Markdown files automatically from the `blogs/` folder at the project root.

## Add a new blog post

Create a new `.md` file in `blogs/`. Use lowercase words separated by hyphens for the filename, for example:

```text
blogs/how-to-plan-a-content-calendar.md
```

Start the file with one H1 heading. That heading becomes the card title and the page title.

```md
# How to plan a content calendar

A short introduction appears as the preview text on the listing page.

## Choose your themes

Use headings, paragraphs, lists, links, images and fenced code blocks as needed.
```

## Open the page

The filename becomes the URL slug:

- `blogs/how-to-plan-a-content-calendar.md` → `/blogs/how-to-plan-a-content-calendar`

The new file will appear automatically on `/blogs` after restarting the development server or rebuilding the site.

## Supported Markdown

The built-in renderer supports H1–H3 headings, paragraphs, bold and italic text, links, images, unordered lists, inline code and fenced code blocks.

Keep the first paragraph concise because it is used as the listing preview.
