// source.config.ts
import {
  defineCollections,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
var docs = defineCollections({
  type: "doc",
  dir: "content/docs",
  schema: frontmatterSchema
  // zod schema to validate frontmatter
});
var meta = defineCollections({
  type: "meta",
  dir: "content/docs",
  schema: metaSchema
  // zod schema to validate JSON data
});
var authdocs = defineCollections({
  type: "doc",
  dir: "content/authdocs",
  schema: frontmatterSchema
});
var authmeta = defineCollections({
  type: "meta",
  dir: "content/authdocs",
  schema: metaSchema
});
export {
  authdocs,
  authmeta,
  docs,
  meta
};
