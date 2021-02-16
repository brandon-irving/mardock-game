
export const Chapter1BluePrint = ({ }) => {
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: 'Story',
                            name: 'Story',
                            label: 'Story',
                            type: 'textrea',                           
                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        style: { display: 'flex', justifyContent: 'flex-end' },
                        Button: {
                            id: 'submit',
                            name: 'submit',
                            type: 'submit',
                            label: 'Submit',
                            disabled: false,
                        }
                    },
                ]
            },
            
        ]
    })
}