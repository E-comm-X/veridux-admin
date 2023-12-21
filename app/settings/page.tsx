import Image from "next/image";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ButtonUI from "@/components/ButtonUI";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertLinkIcon from '@mui/icons-material/InsertLink';





export default function Page() {
  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Setting</h2>
          <p className="font-normal text-base text-[#0000006E]">
            Get an overview of your admin profile, including your username,
            email address, and role
          </p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex gap-4 flex-col md:flex-row bg-white items-center p-4 rounded ">
        <Link
          href="/settings"
          className="font-semibold text-sm underline decoration-[#006FCF]"
        >
          General
        </Link>
        <Link href="/settings/administrator" className="font-semibold text-sm">
          User Management
        </Link>
        <Link href="/settings/security" className="font-semibold text-sm">
          Security & Compliance
        </Link>
        <Link
          href="/settings/fintech-service"
          className="font-semibold text-sm"
        >
          Fintech Services
        </Link>
        <Link href="/settings/support" className="font-semibold text-sm">
          Support
        </Link>
        <Link href="/settings/user-group" className="font-semibold text-sm">
          User Groups
        </Link>
      </div>

      {/* Body */}
      <div className="top flex justify-between mt-6 p-4 ">
        <div className="righ flex items-center gap-4">
          <div className=" rounded-full relative logoContainer w-[130px] h-[130px]">
            <Image
              alt="company-logo"
              className="relative rounded-full"
              fill={true}
              src="/veridux-logo.svg"
            />
            <div className="absolute bottom-0 right-0">
              <CheckCircleIcon />
            </div>
          </div>
          <div className="textContainer">
            <h2 className="font-bold text-sm">Sonia Adams</h2>
            <p className="font-bold text-sm text-[#00000052]">
              www.workplcace@email.co <span>chains-link</span>{" "}
            </p>
          </div>
        </div>
        <div className="left">
          <button className=" flex align-center justify-center text-center text-[#CF0000] border-[1px] border-[#CF0000] bg-[#EFBCBC] font-semibold  rounded px-4 py-2">
            Delete
          </button>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex justify-between middle-header">
        <h3 className="font-bold text-lg ">Company Profile</h3>
        <div className="mt-2 ml-auto flex items-center gap-4">
          <div className="ml-auto">
            <button className="flex align-center justify-center text-center text-[#006FCF] bg-[#006FCF40] font-semibold  rounded px-4 py-2 ">
              Cancel
            </button>
          </div>
          <div className="ml-auto">
            <ButtonUI text="Save"></ButtonUI>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-6 rounded-lg mt-4  border-1px border-[1px] middle flex flex-col md:flex-row">
        <div className="basis-[50%] ">
          <h6 className="text-base font-semibold">Public Profile</h6>
          <p className="text-[#00000052] text-base font-semibold">
            This will be displayed on your profile
          </p>
        </div>
        <div className="basis-[50%] gap-4 mt-4 ">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Soma Admin 1 "
              className="bg-[#006FCF08] p-4 w-full outline-none border-[#006FCF] rounded-lg border-[1px] placeholder:text-[#006FCF] placeholder:font-bold"
            />
            {/* <p className="absolute">c</p> */}
          </div>
          <div className="text-[#006FCF] font-bold flex gap-8 items-center border-[#006FCF] rounded-lg border-[1px] p-4 bg-[#006FCF08]">
            <p>Unittiled.com/</p>
            <div className=" inline-block   w-0.5 self-stretch bg-[#006FCF8A] "></div>

            <h6>Soma Admin 1/</h6>
            <p className="ml-auto">
            <InsertLinkIcon style={{fill: "#006FCF"}} />
            </p>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-lg mt-4 mb-4  ">Company Logo</h3>
      <div className="flex flex-col md:flex-row  px-4 py-8 bg-white border-[#00000045] border-[1px] rounded-lg ">
        <div className="textConatiner basis-[30%]">
          <h5 className="font-semibold text-base">Upload Logo</h5>
          <p className="font-semibol text-sm text-[#00000078] ">
            Update your company logo and then choose where you want it to
            display
          </p>
        </div>
        <div className="imageContainer ml-20 w-[130px] h-[130px] relative  rounded-full ">
          <Image
            alt="company logo"
            src="/veridux-logo.svg"
            fill={true}
            className="absolute "
          />
        </div>
        <div className=" px-8 py-4 rounded-lg gap-8 imageUploadContainer ml-auto bg-[#006FCF14] border-[#006FCF5E] border-[1px] flex flex-col items-center justify-center">
          <CloudUploadIcon style={{fill: "#006FCF"}} />
          <p className="font-semibold text-[#006FCF5C] text-base">
            <span className="underline text-[#006FCF] text-base">
              Click to upload{" "}
            </span>{" "}
            or Drag and Drop SVG,PNG ,JPG (MAX 800 X 400px)
          </p>
        </div>
      </div>
    </main>
  );
}
