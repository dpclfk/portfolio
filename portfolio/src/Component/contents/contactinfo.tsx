interface IProps {
  title: string;
  contents: string;
}

const ContactInfo = ({ title, contents }: IProps): JSX.Element => {
  return (
    <div className="flex pb-12 px-40">
      <div className="w-[30%]">{title}</div>
      <div className="w-[70%] text-end">{contents}</div>
    </div>
  );
};

export default ContactInfo;
