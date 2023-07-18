import {Block} from 'payload/types';


const Testimonials: Block = {
    slug: 'testimonials', // required
    fields: [

        {
            name: "userimage",
            label: "User Image",
            type: "upload",
            relationTo: 'media', 
            
          },
        {
          name: "userName",
          type: "text",
          label: "User Name",
        },
        {
          name: "userTitle",
          type: "text",
          label: "User Title",
        },
    
        {
          name: "description",
          type: "text",
          label: "Description",
        },
      ],

}


export default Testimonials;