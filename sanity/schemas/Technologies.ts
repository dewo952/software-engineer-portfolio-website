export const Technologies = {
  name: "technologies",
  title: "Technologies",
  type: "document",
  fields: [
    {
      name: "technology",
      title: "Technology",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};
