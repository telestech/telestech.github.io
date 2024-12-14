import { CodeBlock, dracula } from 'react-code-blocks';

export function MyCodeBlock({ code, language}) {
  return (
    <CodeBlock
      
      text={code}
      language={language}
      showLineNumbers={true}
      theme={dracula}
    />
  );
}