const ProductDetailCard = ({image,tag,heading,category,price,para,colorBtn1,colorBtn2,colorBtn3,colorBtn4,}) => {
  return (
    <div>
        <div>
            {image}
        </div>
        <div>
            <div>
            <span>{tag}</span>
            <h1>{heading}</h1>
            <p>{category}</p>
            <h1>{price}</h1>
            <p>{para}</p>
            </div>
            <div>
                <div>
                <h1>Color:</h1>
                </div>
                <button className={`${colorBtn1}`}></button>
                <button className={`${colorBtn2}`}></button>
                <button className={`${colorBtn3}`}></button>
                <button className={`${colorBtn4}`}></button>
            </div>
            <div>
                <div>
                    <h1>Size</h1>
                </div>
                <div>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductDetailCard