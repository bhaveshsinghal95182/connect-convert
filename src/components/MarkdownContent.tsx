import type { ReactNode } from "react";

function inlineMarkdown(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

export default function MarkdownContent({ content }: { content: string }) {
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [], list: string[] = [], code: string[] = [], inCode = false;
  const flushParagraph = () => { if (paragraph.length) { blocks.push(<p key={blocks.length} dangerouslySetInnerHTML={{ __html: inlineMarkdown(paragraph.join(" ")) }} />); paragraph = []; } };
  const flushList = () => { if (list.length) { blocks.push(<ul key={blocks.length}>{list.map((item) => <li key={item} dangerouslySetInnerHTML={{ __html: inlineMarkdown(item) }} />)}</ul>); list = []; } };

  content.replace(/\r\n/g, "\n").split("\n").forEach((line) => {
    if (line.trim().startsWith("```")) { flushParagraph(); flushList(); if (inCode) blocks.push(<pre key={blocks.length}><code>{code.join("\n")}</code></pre>); code = []; inCode = !inCode; return; }
    if (inCode) { code.push(line); return; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/), bullet = line.match(/^\s*[-*]\s+(.+)$/);
    if (heading) { flushParagraph(); flushList(); const Tag = `h${heading[1].length}` as "h1" | "h2" | "h3"; blocks.push(<Tag key={blocks.length} dangerouslySetInnerHTML={{ __html: inlineMarkdown(heading[2]) }} />); }
    else if (bullet) { flushParagraph(); list.push(bullet[1]); }
    else if (!line.trim()) { flushParagraph(); flushList(); }
    else paragraph.push(line.trim());
  });
  flushParagraph(); flushList();
  if (inCode && code.length) blocks.push(<pre key={blocks.length}><code>{code.join("\n")}</code></pre>);
  return <div className="markdown-content">{blocks}</div>;
}
