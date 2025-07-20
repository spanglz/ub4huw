"use client"
import ReactMarkdown from "react-markdown"
import { highlight } from "sugar-high"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"

interface MDXContentProps {
  content: string
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="mdx-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkFrontmatter, remarkParseFrontmatter]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            const codeString = String(children).replace(/\n$/, "")

            if (!inline && match) {
              // Block code with syntax highlighting
              const highlightedCode = highlight(codeString)
              return (
                <pre className="bg-muted/50 border border-border rounded-lg p-4 overflow-x-auto my-6">
                  <code
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    className="text-sm font-mono"
                    {...props}
                  />
                </pre>
              )
            } else {
              // Inline code
              return (
                <code
                  className="bg-muted text-amber-400 px-1 py-0.5 rounded text-sm font-mono border border-border"
                  {...props}
                >
                  {children}
                </code>
              )
            }
          },
          h1({ children }) {
            return <h1 className="text-3xl font-bold text-amber-500 font-mono mt-12 mb-6 first:mt-0">{children}</h1>
          },
          h2({ children }) {
            return <h2 className="text-2xl font-bold text-amber-500 font-mono mt-10 mb-4">{children}</h2>
          },
          h3({ children }) {
            return <h3 className="text-xl font-bold text-amber-500 font-mono mt-8 mb-3">{children}</h3>
          },
          h4({ children }) {
            return <h4 className="text-lg font-bold text-amber-500 font-mono mt-6 mb-2">{children}</h4>
          },
          p({ children }) {
            return <p className="text-foreground leading-relaxed mb-4">{children}</p>
          },
          ul({ children }) {
            return <ul className="text-foreground space-y-2 mb-4 ml-6">{children}</ul>
          },
          ol({ children }) {
            return <ol className="text-foreground space-y-2 mb-4 ml-6 list-decimal">{children}</ol>
          },
          li({ children }) {
            return (
              <li className="relative">
                <span className="absolute -left-6 text-amber-500">•</span>
                {children}
              </li>
            )
          },
          strong({ children }) {
            return <strong className="text-amber-400 font-semibold">{children}</strong>
          },
          em({ children }) {
            return <em className="text-muted-foreground italic">{children}</em>
          },
          a({ href, children }) {
            return (
              <a
                href={href}
                className="text-amber-500 hover:text-amber-400 underline underline-offset-2 transition-colors"
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            )
          },
          blockquote({ children }) {
            return (
              <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 bg-muted/30 italic text-muted-foreground">
                {children}
              </blockquote>
            )
          },
          hr() {
            return <hr className="border-border my-8" />
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-border rounded-lg">{children}</table>
              </div>
            )
          },
          thead({ children }) {
            return <thead className="bg-muted/50">{children}</thead>
          },
          tbody({ children }) {
            return <tbody>{children}</tbody>
          },
          tr({ children }) {
            return <tr className="border-b border-border">{children}</tr>
          },
          th({ children }) {
            return <th className="px-4 py-2 text-left text-amber-500 font-mono font-semibold">{children}</th>
          },
          td({ children }) {
            return <td className="px-4 py-2 text-foreground">{children}</td>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
