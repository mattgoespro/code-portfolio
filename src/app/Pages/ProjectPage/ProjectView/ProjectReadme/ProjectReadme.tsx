import HTMLReactParser, { Element } from 'html-react-parser';
import MarkdownIt from 'markdown-it';
import styles from './ProjectReadme.module.scss';

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
            switch (domNode.name) {
              case 'h1':
                domNode.attribs.class = `${styles.title} roboto`;
                break;
              case 'h2':
                domNode.attribs.class = `${styles['section-title']} roboto`;
                break;
              case 'h3':
                domNode.attribs.class = `${styles['section-subtitle']} roboto`;
                break;
              case 'ul':
                domNode.attribs.class = `${styles['section-content']}`;
                break;
              case 'p':
              case 'li':
                domNode.attribs.class = `${styles['section-content']}`;
                break;
            }

            return domNode;
          }
        }
      })}
    </>
  );
}
