import { LiveClass, Note, QualityImage1, QualityImage2, Record, Sound } from "../assets"

const Quality = () => {
  return (
    <section className="quality">
        <div className="quality_container">
            <div className="quality_description">
                <div className="quality_text">
                    <h2 className="quality_header">High quality video, audio & live classes</h2>
                    <p className="quality_para">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <button className="quality_btn">View Courses</button>
                </div>
                <div className="quality_cards">
                    <div className="card" id="card-1">
                        <img src={Sound} alt="audio" />
                        <p>Audio Classes</p>
                    </div>
                    <div className="card" id="card-2">
                        <img src={LiveClass} alt="live-class" />
                        <p>Live Classes</p>
                    </div>
                    <div className="card" id="card-3">
                        <img src={Record} alt="record" />
                        <p>Recorded Classes</p>
                    </div>
                    <div className="card" id="card-4">
                        <img src={Note} alt="note" />
                        <p>50+ Note</p>
                    </div>
                </div>
            </div>
            <div className="quality_images">
                <img src={QualityImage1} alt="quality1" className="quality-image1" />
                <div className="overlay-image">
                    <img src={QualityImage2} alt="quality2" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quality