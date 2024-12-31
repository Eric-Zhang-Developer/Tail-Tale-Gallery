function Card({ src }: { src: string }) {
  return (
    <>
      <img className="shadow-lg" src={src}></img>
    </>
  );
}

export default Card;
