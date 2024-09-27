import { FaReact, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill, RiNodejsLine, RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { SiNestjs, SiSequelize } from "react-icons/si";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

import Icon from "./contents/Icon";

const Skill = (): JSX.Element => {
  return (
    <div className="h-full w-full min-w-[60rem]">
      <div className="pt-8 pl-20 text-5xl pb-12">Skill</div>
      {/* 사용가능 언어 */}
      <div className="pt-8 pl-40 text-3xl flex gap-12 text-center items-center pb-12">
        <div className="w-[10rem] text-start">language</div>
        <Icon icon={<RiJavascriptFill className="m-auto" size={100} />} title="JavaScript"></Icon>
        <Icon icon={<BiLogoTypescript className="m-auto" size={100} />} title="TypeScript"></Icon>
      </div>
      {/* 프론트엔드 */}
      <div className="pt-8 pl-40 text-3xl flex gap-12 text-center items-center pb-12">
        <div className="w-[10rem] text-start">FrontEnd</div>
        <Icon icon={<FaReact className="m-auto" size={100} />} title="React"></Icon>
        <Icon icon={<RiTailwindCssFill className="m-auto" size={100} />} title="tailwindcss"></Icon>
        <Icon icon={<FaHtml5 className="m-auto" size={100} />} title="HTML"></Icon>
        <Icon icon={<IoLogoCss3 className="m-auto" size={100} />} title="CSS"></Icon>
      </div>
      {/* 백엔드 */}
      <div className="pt-8 pl-40 text-3xl flex gap-12 text-center items-center pb-12">
        <div className="w-[10rem] text-start">BackEnd</div>
        <Icon icon={<SiNestjs className="m-auto" size={100} />} title="NestJs"></Icon>
        <Icon icon={<SiSequelize className="m-auto" size={100} />} title="sequelize"></Icon>
        <Icon icon={<RiNodejsLine className="m-auto" size={100} />} title="NodeJs"></Icon>
      </div>
      {/* DB */}
      <div className="pt-8 pl-40 text-3xl flex gap-12 text-center items-center pb-12">
        <div className="w-[10rem] text-start">DB</div>
        <Icon icon={<GrMysql className="m-auto" size={100} />} title="MySQL"></Icon>
        <Icon icon={<BiLogoMongodb className="m-auto" size={100} />} title="MongoDB"></Icon>
      </div>
    </div>
  );
};

export default Skill;
