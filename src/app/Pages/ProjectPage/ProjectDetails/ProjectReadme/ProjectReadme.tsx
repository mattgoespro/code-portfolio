import HTMLReactParser, { Element } from "html-react-parser";
import MarkdownIt from "markdown-it";
import styles from "./ProjectReadme.module.scss";

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
              case "h1":
                domNode.attribs.class = styles.title;
                break;
              case "h2":
                domNode.attribs.class = styles["section-title"];
                break;
              case "h3":
                domNode.attribs.class = styles["section-subtitle"];
                break;
              case "ul":
                domNode.attribs.class = styles["section-content"];
                break;
              case "p":
              case "li":
                domNode.attribs.class = styles["section-content"];
                break;
              case "a":
                domNode.attribs.class = styles["section-link"];
                domNode.attribs.target = "tab";
                break;
            }

            return domNode;
          }
        }
      })}
    </>
  );
}
