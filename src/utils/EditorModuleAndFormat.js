export const formats = ["header","bold","italic","underline","strike","blockquote",
    "list","bullet","indent","link","color","clean",
  ];


  export const modules = {
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  }


  