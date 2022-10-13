import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"

    >
      <rect x="455" y="416" rx="5" ry="5" width="220" height="234" />
      <rect x="0" y="277" rx="3" ry="3" width="260" height="22" />
      <circle cx="130" cy="147" r="107" />
      <rect x="2" y="316" rx="6" ry="6" width="260" height="84" />
      <rect x="0" y="420" rx="3" ry="3" width="60" height="39" />
      <rect x="111" y="421" rx="30" ry="30" width="150" height="35" />
    </ContentLoader>
  )
}

export default PizzaLoadingBlock;