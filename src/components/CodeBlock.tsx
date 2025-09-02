
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  language?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  language = 'javascript', 
  title = 'code.js',
  children,
  className 
}) => {
  return (
    <div className={cn("terminal my-4 shadow-xl", className)}>
      <div className="flex items-center justify-between px-4 py-1 border-b border-gray-700 dark:border-gray-800">
        <span className="text-xs text-gray-400">{title}</span>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-700 dark:bg-gray-800 text-gray-300">{language}</span>
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
