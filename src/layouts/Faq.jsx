import { useState } from "react";
import { Add, Remove } from "../assets";
import { faqData } from "../component/Data";

const Faq = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [Id, setId] = useState(null);
  const handleDescription = (id) => {
    setId(id);
    setShowDescription(false);
  };
  return (
    <section className="faqs">
      <div className="faqs-bg1">
        <div className="faqs-bg2">
          <div className="faqs_container">
            <h2 className="faqs_header">Frequently Asked Questions</h2>
            <p className="faqs_description">
              High-defination video is video of higher resolution and quality
              than standard definition. While there’s no standard meaning for
              high definition, generally any standard video image
            </p>

            <div className="faqs_question">
              {faqData.map((data, index) => (
                <div className="eachFaqs" key={index}>
                  <div className="eachFaqs_title">
                    <h4 className={`${Id === index && "activeFaq"}`}>
                      {data.title}
                    </h4>
                    {Id == index ? (
                      <img
                        src={Remove}
                        alt="remove"
                        onClick={() => handleDescription()}
                      />
                    ) : (
                      <img
                        src={Add}
                        alt="add"
                        onClick={() => handleDescription(index)}
                      />
                    )}
                  </div>
                  {Id == index && <p>{data.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
