import React from "react";
import css from './button.module.css'

export const Button = ({onClick}) => {
   return ( <div className={css.wrap}>
        <button type="button" className={css.load} onClick={onClick}>Load More</button>
    </div>)
}
