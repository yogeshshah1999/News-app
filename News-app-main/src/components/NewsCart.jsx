import React from 'react'
import noimg from "../images/noimg.png"

function NewsCart({item}) {

    const {title , description , url , urlToImage} = item
    return (
        <div class="card  col-md-4 col-12">
            <img src={urlToImage ? urlToImage : noimg} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a target="_blank" href={url} class="btn btn-dark rounded-0 w-100">Read More</a>
            </div>
        </div>
    )
}

export default NewsCart