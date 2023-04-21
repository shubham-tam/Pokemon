interface TitleProps {
  title: string;
  identifier: string;
}

const Title = (props: TitleProps) => {
  const { title, identifier } = props;

  if (identifier !== "region") {
    <div className="text-center text-7xl p-5  text-slate-200">{title}</div>;
  }

  return (
    identifier === "region" && (
      <div className="text-center text-7xl p-5 font-bold text-slate-600">
        {title}
      </div>
    )
  );
};

export default Title;
