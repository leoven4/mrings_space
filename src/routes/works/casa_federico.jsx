import Work from "../../components/work/work.jsx";

const CasaFederico = () => {

    const slides = [
        {
        src: 'https://drive.google.com/thumbnail?id=1muMnrUlfUERQLDETsomIRCRqaf6zlnSM&sz=w1000',
        title: '',
        description: '',
        },
        {
        src: 'https://drive.google.com/thumbnail?id=1BTyJdIwEQBKG4f4Dw_Hc-xOUwYGZzktY&sz=w1000',
        title: 'hall',
        description: '',
        },
        {
        src: 'https://drive.google.com/thumbnail?id=1bXD6EHveJpYZnzpAuAMd-TqY_pm5tYbX&sz=w1000',
        title: 'living room',
        description: '',
        },
        {
        src: 'https://drive.google.com/thumbnail?id=1sx7Tf7Q70DPYJvIws9M2zZBw1xpO8yrZ&sz=w1000',
        title: 'living room',
        description: '',
        },
        {
        src: 'https://drive.google.com/thumbnail?id=137eI__Ul8dI_O9YSULLWlxMfTj_FX_pS&sz=w1000',
        title: 'bedroom',
        description: '',
        },

        {
        src: 'https://drive.google.com/thumbnail?id=1jEyWI_Bwac8EETSbNbS_iuXldGrjWi4h&sz=w1000',
        title: 'bedroom',
        description: '',
        },
        {
        src: 'https://drive.google.com/thumbnail?id=1xhZMBC0jN3_t1vyOBgMPL0s-RCjvzMxL&sz=w1000',
        title: 'wardrobe',
        description: '',
        },
        {
        src: 'https://drive.google.com/thumbnail?id=1K4hGfAR5MIyQRfHxWLa13v6Yg3yaLuqN&sz=w1000',
        title: 'attic',
        description: '',
        }]  

    const work_item = {
        title : 'casa federico',
        brief : 'Restyling of a residential villa.',
        
        detail: ['location','project year', 'status',  'category'],
        info : ['Bologna, Italy', '2024', 'completed', 'Interior design | Residential'],

        slides : slides,

        content: [
            {
                subtitle : '',
                text : [
                    'The next project is a restyling of a residential villa nestled in the serene hills of Bologna city. Recently acquired by a couple — a lawyer and a tour guide, the villa is designed to be a tranquil retreat from the bustling city life. The owners envision a comfortable and relaxing space where they can host their friends and family, fostering a sense of ease and comfort.',
                    'The terraced house has two floors and one basement. The attic is addressed to the filing of the books\' owner and studying. The ground floor is the main subject of the restyling work. The project is focused on color analysis, wallpapers, graphics, and lighting design. For these reasons, a wooden boiserie system has been studied for the bedroom and the living room, combined with wallpapers that represent natural landscapes with a pictorial stroke. The defined colors are mid-blue and light blue, contrasting with coral red and light grey for some details and walls.',
                    'A sizeable wooden column has been created at the entrance around an existing structural column with a rectangular hole in the middle. This element is considered an architectural sign to realize a separate hall from the living room but with a strong connection with the rest of the space in terms of colors and style. Finally, the choice has fallen on some lamps connected with colorful belts starting from the existing electrical socket for the lighting system. All belts and lamp shapes create a geometrical and decorative draw on the ceiling, and all the walls remain intact.',
                    ],
                pics : slides
            }
        ]
    }

  return(
    <div>
        <Work work_item={work_item}/>
    </div>
    );
};

export default CasaFederico;

