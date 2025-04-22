import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImages",
      title: "Main Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "date",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImages",
    },
    prepare(selection) {
      const { title, media } = selection;
      const firstImage = media && media.length > 0 ? media[0] : null;
      return {
        title: title,
        media: firstImage,
      };
    },
  },
});