// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, displayImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const {thumbNailClassName} = isActive ? 'active' : 'thumbnail'

  const onSelect = () => {
    displayImage(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onSelect}>
        <img
          src={thumbnailUrl}
          className={`thumbnail ${thumbNailClassName}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
