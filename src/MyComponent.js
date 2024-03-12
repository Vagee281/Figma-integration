import React from "react";

function MyComponent({modified,setModified}) {
   // let data = `${modified}`;
      let data=``;

    data = data.replace(/<meta charset="utf-8"><div><span data-metadata="/g, "<meta charset='utf-8'><meta charset=&quot;utf-8&quot;><span data-metadata=&quot;");
    data = data.replace(/"><\/span><span data-buffer="/g, "&quot;></span><span data-buffer=&quot;");
    data = data.replace(/"><\/span><\/div><span style="white-space:pre-wrap;"/g, "&quot;></span></div><span style=&quot;white-space:pre-wrap;&quot;");
     setModified(data);
     console.log(data);
    return (
      <div dangerouslySetInnerHTML={{ __html: data }} />
    );
  }
  
  export default MyComponent;