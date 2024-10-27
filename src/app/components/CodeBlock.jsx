import darcula from "react-syntax-highlighter/dist/cjs/prism";
import dynamic from "next/dynamic";
const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  { ssr: false },
);
const CodeBlock = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={darcula} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
