import "./work.scss"

const Work = ({ work_item }) => {

  return(
    <div className="work_item">
        
        <div className="work_header">{work_item['title']}</div>
        <div className="work_description">{work_item['brief']}</div>

        <div className="wrapper">
            <div className="work_detail_container">
                <div>Location</div>
                <div>Project year</div>           
                <div>Category</div> 
                <div>Status</div> 

            </div>
                
            <div className="work_info_container">
                <div>{work_item['location']}</div>
                <div>{work_item['year']}</div>           
                <div>{work_item['mode']}</div>
                <div>{work_item['status']}</div>

            </div>
        
        </div>

        <div>
            {work_item['description'].map((description) => (
            <p>{description}</p>))}
            <p>{work_item['description']}</p>

            {/* <p>{work_item['description'][1]}</p>
            <p>{work_item['description'][2]}</p>
            <p>{work_item['description'][3]}</p>
            <p>{work_item['description'][4]}</p>
            <p>{work_item['description'][5]}</p>
            <p>{work_item['description'][6]}</p> */}

        </div>

    </div>
    );
};

export default Work;
