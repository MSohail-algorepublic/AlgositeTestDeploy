import {Block } from 'payload/types';


const AboutUs : Block = {
    slug: 'aboutUs', // required
    fields: [
        {
            name: "aboutImage",
            type: "upload",
            relationTo: 'media',
            label: "About Image",
          },
          {
            name: "aboutDescription",
            type: "textarea",
            label: "About Description",
          },
          {
            name: "readMoreLink",
            type: "text",
            label: "Read More Link",
          },
      
          {
            name: "aboutUsSteps", // required
            type: "array", // required
            label: "About Us Steps", // optional
      
            fields: [

                {
                    type:"row",
                    fields:[
                        {
                            name: "title",
                            type: "text",
                            admin:{
                                width: '50%',
                            }
                          },
                          {
                            name: "description",
                            type: "textarea",
                            label: "Description",
                            admin:{
                                width: '50%',
                            }
                          },
                    ],
                }
              // required
             
            ],
          },
    ]
}

export default AboutUs;