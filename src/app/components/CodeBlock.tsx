"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy, FaCheck} from "react-icons/fa6";
import {Poppins} from 'next/font/google'

interface CodeBlockProps {
  filename: string;
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ filename, code, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-gray-300 shadow-lg">
      <div className="flex items-center justify-between bg-[#444444] px-4 py-2 font-mono text-[16px] font-semibold text-white">
        {filename || "Code"}
        <button
          className="flex items-center text-white hover:text-gray-300"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {isCopied ? (
            <>
              <FaCheck className="mr-2" /> Copied!
            </>
          ) : (
            <>
              <FaRegCopy className="mr-2" /> Copy Code
            </>
          )}
        </button>
      </div>
      <div className="rounded-b-lg bg-[#011626] px-4 py-2">
        <SyntaxHighlighter
          wrapLongLines
          language={language || "javascript"}
          style={nightOwl}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
