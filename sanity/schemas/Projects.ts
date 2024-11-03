export const Projects = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "liveUrl",
      title: "LiveURL",
      type: "string",
    },

    {
      name: "githubUrl",
      title: "GithubURL",
      type: "string",
    },

    {
      name: "techStack",
      title: "TechStack",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "code",
          title: "Code Snippet",
          options: {
            language: "javascript",
            languageAlternatives: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "Python", value: "python" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "Markdown", value: "markdown" },
            ],
            withFilename: true,
          },
        },
      ],
    },
  ],
};
