import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';

function CodeBlockDemo({ code, language }) {
  return (
    <CodeBlock code={code} language={language} theme={themes.github}>
      <CodeBlock.Code className="bg-white p-6 rounded-lg shadow">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-xs text-gray-400 text-right select-none" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}
export default CodeBlockDemo