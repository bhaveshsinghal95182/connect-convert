import { ContentIndex } from "../components/ContentIndex";
import { blogs } from "../content/markdown";

export default function BlogsPage() {
  return <ContentIndex items={blogs} />;
}
