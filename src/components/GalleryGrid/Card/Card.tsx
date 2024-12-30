import {type cardProp} from '../GalleryGrid'


function Card({src} : cardProp){
  return (
    <>
      <img src={src}></img>
    </>
  )
}

export default Card