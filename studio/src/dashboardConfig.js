export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62e29972d78f6a23ca0a463e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-q291a1mr",
                  apiId: "42154f82-363e-421a-bcaf-17421581e726",
                },
                {
                  buildHookId: "62e29972cc0fb62741e01f4d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wd6a9jda",
                  apiId: "e7f5cc9a-0419-46f6-b97c-55242da16f16",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/krawc/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wd6a9jda.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
