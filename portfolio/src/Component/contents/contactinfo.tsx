interface IProps {
  title: string;
  contents: string;
}

const ContactInfo = ({ title, contents }: IProps): JSX.Element => {
  return (
    <div className="flex pb-12 px-60">
      <div className="w-[50%]">{title}</div>
      <div className="w-[50%] text-end">{contents}</div>
    </div>
  );
};

export default ContactInfo;
