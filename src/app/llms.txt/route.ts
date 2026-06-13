import { getAllMDXContent } from "@/lib/mdx";

export async function GET() {
  const baseUrl = "https://farisashai.com";
  const articles = await getAllMDXContent();

  const content = `# Faris Ashai - Software Engineer

> Personal website and portfolio of Faris Ashai, a software engineer working across frontend, backend, infrastructure, and product, with deepest work at the intersection of frontend craft, performance optimization, and systems design.

## About
${baseUrl}/about

## Featured Work
${baseUrl}/work

## Journal
${baseUrl}/journal

## Articles
${articles
  .map((article) => {
    return `
### ${article.title}
${baseUrl}/journal/${article.slug}
${article.description}
Keywords: ${article.keywords}
Labels: ${article.labels.join(", ")}
`;
  })
  .join("\n")}

## Experiments
${baseUrl}/experiments
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
