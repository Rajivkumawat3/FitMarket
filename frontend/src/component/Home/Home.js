
import React, { Fragment,useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard"
import MetaData from "../layout/MetaData";
import {getProduct} from "../../actions/productAction"
import { useSelector,useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert"
import { clearErrors } from "../../actions/productAction";


const Home = () => {
  const alert=useAlert()
    const dispatch=useDispatch();
    const {loading,error,products}=useSelector(state=> state.products)

    useEffect(()=>{
      if(error){
       alert.error(error)
        dispatch(clearErrors());
      }
           dispatch(getProduct())
    },[dispatch,error,alert])

  return (
    <Fragment>
     {
       loading ? <Loader/>:  <Fragment>
       <MetaData title="Fit-Market.com"/>
              <div className="banner">
                <p>Welcome to Fit-Market-Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
    
                <a href="#container">
                  <button>
                    Scroll <CgMouse />
                  </button>
                </a>
              </div>
             
              <h2 className="homeHeading">Featured Products</h2>
    
              <div className="container" id="container">
                 {
                  products && products.map(product=>(
    
                     <ProductCard product={product}/>
                  ))
                    
                 }
              </div>
    
            </Fragment>
     }
       </Fragment>
  )
}

export default Home