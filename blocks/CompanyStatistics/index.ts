import { Block } from "payload/types";


const CompanyStatistics: Block = {
    slug: "CompanyStatistics", // required
    fields: [
        {
            name: "companyStatistics", // required
            type: "array", // required
            label: "Company Statics Section", // optional
            fields: [
              {
                type: "row",
                fields: [
                  {
                    name: "counter",
                    type: "number",
                    label: "Counter Number",
                    admin: {
                      width: "50%",
                    },
                  },
                  {
                    name: "title",
                    type: "text",
                    label: "Counter Title",
                    admin: {
                      width: "50%",
                    },
                  },
                ],
              },
            ],
          },
    ]
}

export default CompanyStatistics;