import React from "react";

const Test = ({ data }) => {
  const contenu1 = data.test1.html;
  const contenu2 = data.test2.html;
  return (
    <div>
      <p>Début template test</p>
      <div dangerouslySetInnerHTML={{ __html: contenu1 }} />
      <div dangerouslySetInnerHTML={{ __html: contenu2 }} />
    </div>
  );
};

export const testQuery = graphql`
  query Test {
    test1: markdownRemark(id: { eq: "945351f9-4086-5183-a9f3-9b619a5aff94" }) {
      html
    }
    test2: markdownRemark(id: { eq: "600887d1-ed12-5269-bb02-06bdb497b33b" }) {
      html
    }
  }
`;

export default Test;
