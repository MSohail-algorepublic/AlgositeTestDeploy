import { Block,} from "payload/types";

const BlogCategory: Block = {
    slug: "blogCategories",
    fields:[
        {
            name: 'categorytitle',
            label: 'category Title',
            type: 'array',
            fields: [ // required
            {
              name: 'categorytitle',
              type: 'text',
              label: 'Category Title',
            },
        ],
        },
    ],
}

export default BlogCategory;