import { BallTriangle } from "react-loader-spinner"
import css from "./Loader.module.css"
export const Loader = () => { 
    return ( 
        <div className={css.modal}>
        <BallTriangle
         height={200}
         width={200}
         radius={5}
         color="#00BFFF"
         ariaLabel="ball-triangle-loading"
         wrapperStyle={{}}
         wrapperClass=""
        
        />
        </div>
    )
}