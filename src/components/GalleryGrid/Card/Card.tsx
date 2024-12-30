function Card({ src }: { src: string }) {
  return (
    <>
      <img className="shadow-md" src={src}></img>
    </>
  );
}

export default Card;
