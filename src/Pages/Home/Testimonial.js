import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const reviews = [
  {
    _id: 1,
    name: "Winson Herry",
    img: people1,
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    location: "California",
  },
  {
    _id: 2,
    name: "Winson Herry",
    img: people2,
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    location: "California",
  },
  {
    _id: 3,
    name: "Winson Herry",
    img: people3,
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    location: "California",
  },
];

const Testimonial = () => {
  return (
    <section className="container mx-auto mt-20">
      <div className="flex justify-between w-11/12 mx-auto">
        <div>
          <p className="text-cyan-700 font-bold text-xl">Testimonial</p>
          <h1 className="text-4xl text-gray-700">What Our Patients Says</h1>
        </div>
        <figure>
          <img className="md:w-[192px] w-24" src={quote} alt="" />
        </figure>
      </div>

      {/* review section start */}
      <div className="flex flex-wrap gap-5 justify-center mt-7">
        {reviews.map((review) => (
          <div key={review._id} className="w-96 bg-gray-100 p-7 shadow-lg rounded-xl">
            <p>{review.review}</p>
            <div className="flex items-center mt-5 gap-5">
              <div className="w-16 h-16 border-4 border-cyan-300 rounded-full">
                <img src={review.img} alt="" />
              </div>
              <div>
                <h1 className="text-cyan-700 font-bold">{review.name}</h1>
                <p>{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
