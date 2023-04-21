const Button = (props: any) => {
  const { name, event } = props;
  return (
    <button
      className="p-3 bg-transparent border-2 hover:bg-blue-400 border-blue-400 hover:border-transparent text-blue-400 hover:text-white mt-4  mb-4 rounded-lg font-bold"
      onClick={event}
    >
      {name}
    </button>
  );
};

export default Button;
