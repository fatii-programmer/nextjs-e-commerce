import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "productImage",
      type: "image",
      title: "Product Image",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (rule) => rule.required(),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    },
  ],
});
