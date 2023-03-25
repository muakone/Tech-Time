import {
  Best,
  MeetingIcon1,
  MeetingIcon2,
  MentorIcon,
  PriceIcon,
} from "../assets";

const WhyWeAreBest = () => {
  const BestData = [
    {
      image: MentorIcon,
      title: "experienced mentors",
      body: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      image: MeetingIcon1,
      title: "one-on-one meetings",
      body: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      image: MeetingIcon2,
      title: "one-on-one meetings",
      body: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      image: PriceIcon,
      title: "affordable prices",
      body: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
  ];
  return (
    <section className="whyWeAreBest">
      <div className="best-bg2">
        <div className="best-bg3">
          <div className="container">
            <div className="container_1">
              <h3>This Is Why We Are Best From Others</h3>
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </p>
              <img src={Best} alt="best" />
            </div>
            <div className="container_2">
              {BestData.map((data, index) => (
                <div className="container_card" key={index}>
                  <img src={data.image} alt="image" />
                  <h5 className="card_title">{data.title}</h5>
                  <p className="card_para">{data.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBest;
