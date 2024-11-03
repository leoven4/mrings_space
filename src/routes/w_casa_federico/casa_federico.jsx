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
        
        detail: ['location','project year', 'category', 'status'],
        info : ['Bologna, Italy', '2024', 'Interior design | Residential', 'completed'],

        description : [
            'The following project is a restyling of a residential villa on the hills of Bologna city, recently acquired by a couple, he\'s a lawer and she\'s a tour guide. Owners are looking for a quiet place, far from the chaotic lifestyle of the city, where they could host their friends and family in a comfortable and relaxing spot.',
            'The terraced house has two floors and one basement. The attic is totally addressed to the filing  of the books\' owner and studying. The ground floor is the main subject of the restyling work. The project is focused on color analysis, wallpapers and their graphics and lightning design. For these reasons a wooden boiserie system has been studied for the bedroom and the living room, combined with wallpapers that represent natural landscapes with a pictorical stroke. The defined colours are mid-blue and light blue in contrast with coral red and light grey colours for some details and walls.',
            'At the entrance, a large wooden column has been created around an existing structural column with a rectangular hole in the middle. This element is thought as an architectural sign to realized a separated hall from the living room, but with a strong connection with the rest of the space in terms of colours and style. Finally for the lightning system the choice has fell on some lamps connected to each others with some colorful belts starting from the existing electrical socket. All belts and lamps\' shapes create a geometrical and decorative draw on the ceiling and all the walls remain intact.'    
        ],

        slides: slides,

    }

  return(
    <div>
        <Work work_item={work_item}/>
    </div>
    );
};

export default CasaFederico;

