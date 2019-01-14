import React from "react";

const Test = ({ data }) => {
  const contenu1 = data.markdownRemark.html;
  const contenu2 =
    data.markdownRemark.frontmatter.linkedMarkdownFile.childMarkdownRemark.html;
  return (
    <div>
      <p>Début template test</p>
      <div dangerouslySetInnerHTML={{ __html: contenu1 }} />
      <div dangerouslySetInnerHTML={{ __html: contenu2 }} />
    </div>
  );
};

export const testQuery = graphql`
  query Test($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        linkedMarkdownFile {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default Test;
