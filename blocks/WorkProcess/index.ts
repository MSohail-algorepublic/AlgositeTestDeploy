import {Block} from 'payload/types';


const WorkProcess: Block = {
    slug: 'WorkProcess', // required
    fields: [
        {
            name: "workProcess", // required
            type: "array", // required
            label: "Work Process",
            fields: [
              {
                name: "workingprocesslist",
                type: "text",
                label: "Working Process Title",
              },
            ],
          },
    ],
}
export default WorkProcess;