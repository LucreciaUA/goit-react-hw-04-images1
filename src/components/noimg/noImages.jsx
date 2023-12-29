import React from "react";
import css from './noImages.module.css'

export const NoImages = () => {
    return (
        <div className={css.wrap}><p className={css.info}>We are sorry. There are no images for your request.</p>
        <p className={css.emoji}>(シ. .)シ</p>
        </div>
        
    )
}