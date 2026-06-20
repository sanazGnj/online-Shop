
import AddToCart from '@/app/components/AddToCart'
import CartItem from '@/app/components/CartItem'
import Container from '@/app/components/Container'
import { IProductItemProps } from '@/app/components/ProductItem'
import { formatNumberWithCommas } from '../../utils/number'


interface IProductProps {
    params: Promise<{id: string}>
    searchParams :Promise <{}>
}


async function Product({params}:IProductProps) {
    
    const {id} = await params

    const result = await fetch (`http://localhost:3002/products/${id}`)

    const data = await result.json() as IProductItemProps

  return (

 <Container>
     <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 text-right rtl p-4">
            <h2 className="font-bold text-2xl" > {data.title} </h2>
                <p className="text-gray-600">{data.description} </p>
                {/* <p>قیمت :<span>{data.price}  $</span> </p> */}
                 <p>قیمت : <span> {formatNumberWithCommas(data.price??0)}$</span></p>
               
             <AddToCart id={id}/>
   

        </div>

        <div className="col-span-3">
              <img src= {data.image}  alt="product image"/>
        </div>

    </div>
 </Container>
  )
}

export default Product