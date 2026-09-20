import { ContentArticle } from "../components/ContentArticle";
import { blogs } from "../content/markdown";

export default function BlogPostPage() {
  return <ContentArticle items={blogs} />;
}
