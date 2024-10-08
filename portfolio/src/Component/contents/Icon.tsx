interface IProps {
  title: string;
  icon: React.ReactNode;
}

const Icon = ({ title, icon }: IProps): JSX.Element => {
  return (
    <div className="w-[11rem]">
      {icon}
      <div className="font-bold">{title}</div>
    </div>
  );
};

export default Icon;
