interface TitleProps {
  title: string;
  identifier: string;
}

const Title = (props: TitleProps) => {
  const { title, identifier } = props;

  if (identifier !== "region") {
    return <div className="text-left text-4xl p-5">{title}</div>;
  } else {
    return (
      <div className="text-center text-7xl p-5 font-bold text-slate-600">
        {title}
      </div>
    );
  }
};

export default Title;
