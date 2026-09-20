export type MarkdownFile = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

function collect(files: Record<string, string>): MarkdownFile[] {
  return Object.entries(files).map(([path, content]) => {
    const name = path.split("/").pop()?.replace(/\.md$/, "") ?? "article";
    const heading = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
    const excerpt = content.split("\n").map((line) => line.trim()).find((line) => line && !line.startsWith("#") && !line.startsWith("```"))?.replace(/^[-*>]\s+/, "") ?? "Read the full article.";
    return { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""), title: heading || name.replace(/[-_]/g, " "), excerpt, content };
  }).sort((a, b) => a.title.localeCompare(b.title));
}

const blogFiles = import.meta.glob("../../blogs/**/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;
export const blogs = collect(blogFiles);
