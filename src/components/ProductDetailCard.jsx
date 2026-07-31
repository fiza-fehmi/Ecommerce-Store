const ProductDetailCard = ({
  image,
  tag,
  heading,
  category,
  price,
  para,
  colorBtn1,
  colorBtn2,
  colorBtn3,
  colorBtn4,
}) => {
  return (
    <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(31,32,56,0.08)] md:grid-cols-2">
        <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-[#F2EBFB] p-6">
            <img src={image} alt={heading} className="max-h-[300px] w-full object-contain" />
        </div>
        <div className="space-y-6">
            <div className="space-y-3">
            <span className="inline-flex rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600">{tag}</span>
            <h1 className="text-3xl font-bold text-[#1F2038]">{heading}</h1>
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">{category}</p>
            <h1 className="text-2xl font-semibold text-[#5A3FF2]">{price}</h1>
            <p className="text-base leading-7 text-gray-600">{para}</p>
            </div>
            <div className="space-y-3">
                <div>
                <h1 className="font-semibold text-[#1F2038]">Color</h1>
                </div>
                <div className="flex gap-3">
                  {colorBtn1 && <button aria-label="Color option 1" className={colorBtn1}></button>}
                  {colorBtn2 && <button aria-label="Color option 2" className={colorBtn2}></button>}
                  {colorBtn3 && <button aria-label="Color option 3" className={colorBtn3}></button>}
                  {colorBtn4 && <button aria-label="Color option 4" className={colorBtn4}></button>}
                </div>
            </div>
            <div className="space-y-3">
                <div>
                    <h1 className="font-semibold text-[#1F2038]">Size</h1>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button className="rounded-lg border border-gray-200 px-4 py-2">S</button>
                    <button className="rounded-lg border border-gray-200 px-4 py-2">M</button>
                    <button className="rounded-lg border border-gray-200 px-4 py-2">L</button>
                    <button className="rounded-lg border border-gray-200 px-4 py-2">XL</button>
                    <button className="rounded-lg border border-gray-200 px-4 py-2">XXL</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductDetailCard
