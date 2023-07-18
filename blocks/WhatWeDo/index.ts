import {Block} from 'payload/types';

const WhatWeDo: Block = {
    slug: 'whatWeDo', // required
    fields:[
        {
            name: "whatwedoTitle",
            type: "text",
            label: "Title",
          },
      
          {
            name: "pageHeading",
            type: "text",
            label: "Section Title",
          },

          {
            name: "whatWeDoCenterImage",
            label: "Image",
            type: 'upload',
            relationTo: 'media',
            },
      
          {
            label: "What we do Collection",
            type: "array",
            name: "whatwedoCollection",
            fields: [
              {
                name: "what_wedo_Collection_icon",
                type: "text",
                label: "icon",
              },
              {
                name: "whatwedo_Collection_title",
                type: "text",
                label: "Title",
              },
      
              {
                name: "what_wedo_Collection_description",
                type: "textarea",
                label: "description",
              },
            ],
          },
    ]
}

export default WhatWeDo;