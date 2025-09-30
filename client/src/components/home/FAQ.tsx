import ProductTitle from "../ProductTitle";
import assets from "@/assets/assets";
import AccordianSec from "../AccordianSec";

const FAQ = () => {
  return (
    <div className="mt-20 px-14 py-4 max-w-[1440px] mx-auto ssm:px-4">
      <ProductTitle
        title="FREQUENTLY ASKED QUESTIONS"
        text="Got questions? We've got the answers you need right here!"
      />
      <div className="mt-6 flex gap-6">
        <div className="h-[600px] mdd:h-full ssm:hidden">
          <img
            src={assets.fqaimg}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <AccordianSec />
      </div>
    </div>
  );
};

export default FAQ;
