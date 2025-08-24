import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import ProductList from '../../components/Admin/Products/ProductList'

function Products() {
  return (
   <div>
          <div className="w-full px-4 py-8 admin-pages">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 lg:w-1/4 admin-left-side">
                <AdminMenu />
              </div>
              <div className="w-full md:w-3/4 lg:w-3/4 admin-right-side">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Products