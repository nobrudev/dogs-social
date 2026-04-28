import React from "react";

/*o componente head muda o titulo da pagina dependendo de qual pagina entramos*/

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
};

export default Head;
