"use client"
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import ProductItem, { IProductItemProps, IProductList } from '../components/ProductItem'
import Link from 'next/link'
import Pagination from '../components/Pagination';

interface IstoreProps {
  params: Promise<{}>;  
  searchParams: Promise<{ page: string; per_page: string ;  brand?: string}>;
}


function Store({ searchParams }: IstoreProps) {
  const [products, setProducts] = useState<IProductList | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState("1")
  const [per_page, setPerPage] = useState("4")
  const [brand, setBrand] = useState("")


  useEffect(() => {
    // Get searchParams in useEffect for client component
    async function loadSearchParams() {
      const resolvedParams = await searchParams
      setPage(resolvedParams.page ?? "1")
      setPerPage(resolvedParams.per_page ?? "4")
       setBrand(resolvedParams.brand ?? "")
    }
    loadSearchParams()
  }, [searchParams])

  useEffect(() => {
    // Fetch products when page or per_page changes
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)
        // const result = await fetch(`http://localhost:3002/products?_page=${page}&_per_page=${per_page}`)

            const url = brand
      ? `http://localhost:3002/products?brand=${brand}&_page=${page}&_per_page=${per_page}`
      : `http://localhost:3002/products?_page=${page}&_per_page=${per_page}`

    const result = await fetch(url)

        
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`)
        }
        
        const data = await result.json() as IProductList
        setProducts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }



    fetchProducts()
  }, [page, per_page, brand])

  if (loading) {
    return (
      <Container>
        <div className="text-center py-8">در حال بارگذاری...</div>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <div className="text-center py-8 text-red-500">خطا: {error}</div>
      </Container>
    )
  }

  if (!products) {
    return (
      <Container>
        <div className="text-center py-8">محصولی یافت نشد</div>
      </Container>
    )
  }

  return (
    <Container> 
      <h1 className="text-right py-4 rtl">محصولات</h1>
      {/* Fixed: text-righ -> text-right */}
      <div className="grid grid-cols-4 gap-4 rtl">
        {products.data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item}/>
          </Link>
        ))}
      </div>
     
  
    </Container>
  )
}




export default Store