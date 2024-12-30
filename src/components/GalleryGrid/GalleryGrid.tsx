import Card from "./Card/Card";

export type cardProp = {
  src: string;
};

function GalleryGrid() {
  // Props for card, currently only the filepath

  // Collect all the image file paths in an array
  const cardData: cardProp[] = [
    { src: "./public/cat-umbella-anime.png" },
    { src: "./public/sushi-cat-anime.jpeg" },
    { src: "./public/watercolor-husky.png" },
  ];

  return (
    <>
      {cardData.map((card) => (
        <Card src={card.src} key={card.src}></Card>
      ))}
    </>
  );
}

export default GalleryGrid;
