import {Block} from 'payload/types';

const HeroSlider: Block = {
    slug: 'HeroSlider', // required
    fields: [
        {
            name: "maintitle",
            type: "text",
            label: "Main Title",
          },
      
          {
            name: "subtitle",
            type: "text",
            label: "Sub Title",
          },
          {
            name: "StartProjectButton",
            type: "text",
            label: "Start a Project Url",
          },
          {
            name: "HowWeWorkButton",
            type: "text",
            label: "How we Work Url",
          },

          {
            
            name: 'sliderImage', // required
            type: 'array', // required
            label: 'Slider Image ',
            // minRows: 2,
            // maxRows: 10,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [ // required
            {
                name: 'heroMedia',
                  label: 'Hero Media',
                  type: 'upload',
                  relationTo: 'media',
              },
            ]

          },
          
    ]
}

export default HeroSlider;