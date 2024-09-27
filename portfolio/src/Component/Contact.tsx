import ContactInfo from "./contents/contactinfo";

const Contact = (): JSX.Element => {
  return (
    <div className="text-[2rem] font-bold">
      <ContactInfo title={"Phone"} contents={"010-8810-9457"} />
      <ContactInfo title={"Email"} contents={"akdfid1@gmail.com"} />
      <ContactInfo title={"Address"} contents="경기도 안양시(안양역에서 10분거리)" />
      <ContactInfo title={"Git"} contents="https://github.com/dpclfk" />
    </div>
  );
};

export default Contact;
