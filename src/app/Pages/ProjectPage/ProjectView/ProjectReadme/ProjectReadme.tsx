import './ProjectReadme.scss';
import HTMLReactParser, { Element } from 'html-react-parser';
import MarkdownIt from 'markdown-it';

interface ProjectReadmeProps {
  readmeContent: string;
}

export function ProjectReadme(props: ProjectReadmeProps) {
  const parseHtmlToJsx = HTMLReactParser;
  const parseMarkdownToString = MarkdownIt();

  return (
    <>
      {parseHtmlToJsx(parseMarkdownToString.render(props.readmeContent), {
        replace: (domNode) => {
          if (domNode instanceof Element) {
            const tagName = domNode.name;

            switch (tagName) {
              case 'h1':
                domNode.attribs['class'] = 'markdown-title roboto';
                break;
              case 'h2':
                domNode.attribs['class'] = 'markdown-section-title roboto';
                break;
              case 'h3':
                domNode.attribs['class'] = 'markdown-section-subtitle roboto';
                break;
              case 'p':
                domNode.attribs['class'] = 'markdown-section-content';
                break;
              case 'ul':
                domNode.attribs['class'] = 'markdown-list';
                break;
              case 'li':
                domNode.attribs['class'] = 'markdown-section-content';
                break;
            }

            return domNode;
          }
        }
      })}
    </>
  );
}
