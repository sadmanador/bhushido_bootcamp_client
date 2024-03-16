import { Slide } from "react-awesome-reveal";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center pt-16 pb-6 bg-gradient-to-b from-zinc-900 to-zinc-400 mb-10">
      <Slide direction="down" className="text-3xl font-bold mb-3 russo-one-regular text-[#c33827]">{heading}</Slide>
      <div className="divider">
        <Slide direction="up" className="italic font-semibold break-words text-base-300">{subHeading}</Slide>
      </div>
    </div>
  );
};

export default SectionHeader;
