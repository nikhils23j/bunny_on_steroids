
import React from 'react';

interface CodeBlockProps {
  language?: string;
  title?: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  language = 'javascript', 
  title = 'code.js',
  children 
}) => {
  return (
    <div className="terminal my-4 shadow-xl">
      <div className="flex items-center justify-between px-4 py-1 border-b border-gray-700">
        <span className="text-xs text-gray-400">{title}</span>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300">{language}</span>
      </div>
      <div className="terminal-content px-4 py-3 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
