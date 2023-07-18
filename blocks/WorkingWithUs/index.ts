import {Block} from 'payload/types';


const WorkingWithUs: Block = {
    slug: 'workingWithUs', // required
    fields: [

        {
            type:"row",
            fields:[
                {
                    name: "whyusTitle",
                    type: "text",
                    label: "Title heading",
                    admin: {
                        width: '50%',
                    },
                  },
              
                  {
                    name: "workingwithusTitle",
                    type: "text",
                    label: "Title Sub heading",
                    admin: {
                        width: '50%',
                    },
                  },

            ]
        },

          {
            name: "description",
            type: "textarea",
            label: "Description",
          },

          {
            name: "image",
            label: "Image",
            type: "upload",
            relationTo: 'media', 
            
          },
      
          {
            name: "reademorelink",
            type: "text",
            label: "Read More Link",
          },
      
          // {
          //   name: "media Image",
          //   type: "text",
          //   label: "Media",
          // },
    ]

}

export default WorkingWithUs;