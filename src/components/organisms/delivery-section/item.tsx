interface Props {
  image: string;
  title: string;
  description: string;
}

export const Item = (props: Props) => {
  const { image, title, description } = props;
  return (
    <div className="flex flex-col gap-2 items-center">
      <img src={image} alt="" />
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="font-thin">{description}</p>
    </div>
  );
};
