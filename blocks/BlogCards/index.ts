import { Block, CollectionConfig } from 'payload/types';


const BlogsCards: Block = {
    slug: 'blogsCards', // required
    fields: [
        // required
        {
          name: 'blogImage',
          type: 'text',
          label: 'Blog Image',
        },
    
        {
          name: 'blogTitle',
          type: 'text',
          label: 'Blog Title',
        },
    
        {
          name: 'blogDescription',
          type: 'textarea',
          label: 'Blog Description',
        },
        {
          name: 'readMoreUrl',
          type: 'text',
          label: 'Read More Url',
        },
        // {
         
        //   name: 'blogtime', // required
        //   type: 'date', // required
        //   label: 'Blog Date Time',
        //   defaultValue: '1988-11-05T8:00:00.000+05:00',
        //   admin: {
        //     date: {
        //       // All config options above should be placed here
        //       pickerAppearance: 'timeOnly',
        //     },
        //   },  
        // },
        {
          name: 'blogDate',
          type: 'text',
          label: 'Blog Date',
        },
        {
          name: 'blogUserName',
          type: 'text',
          label: 'Blog User Name',
        },
        {
          name: 'blogCategoryTag',
          type: 'text',
          label: 'Blog Category Tag',
        },
      ],
  };

  export default BlogsCards;