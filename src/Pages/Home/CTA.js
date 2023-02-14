import React from "react";
import treatment from "../../assets/images/treatment.png";
import Button from "../../Components/Button";

const CTA = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col md:flex-row items-center mt-36">
        <div className="w-11/12 md:w-1/2 md:pl-[-24] lg:pl-32">
          <img className="sm:w-80" src={treatment} alt="treetment" />
        </div>
        <div className="w-11/12 md:w-1/2 mt-8 md:mt-0 flex flex-col gap-3">
          <h1 className="text-4xl font-bold">
            Exceptional Dental
            <br />
            Care, on Your Terms
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>GET STARTED</Button>
        </div>
      </section>
    </>
  );
};

export default CTA;
