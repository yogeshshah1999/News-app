import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer"

const NewsContext = createContext()


export const NewsProvider = ({children}) =>{


    const initialState = {
        news : [
            // {
            //     "source": {
            //     "id": null,
            //     "name": "Biztoc.com"
            //     },
            //     "author": "abc7news.com",
            //     "title": "Tesla really fell off a cliff today",
            //     "description": "MONTARA, Calif. -- A 4-year-old girl, a 9-year-old boy and two adults survived Monday after their car plunged off a Northern California cliff along the Pacific Coast Highway near an area known as Devil's Slide that's known for fatal wrecks, officials said. Th…",
            //     "url": "https://biztoc.com/x/c0f9d71176f79fd6",
            //     "urlToImage": "https://c.biztoc.com/p/c0f9d71176f79fd6/og.webp",
            //     "publishedAt": "2023-01-04T06:18:08Z",
            //     "content": "MONTARA, Calif. -- A 4-year-old girl, a 9-year-old boy and two adults survived Monday after their car plunged off a Northern California cliff along the Pacific Coast Highway near an area known as Dev… [+476 chars]"
            //     },
            //     {
            //     "source": {
            //     "id": null,
            //     "name": "Freerepublic.com"
            //     },
            //     "author": "CBS",
            //     "title": "U.S. \nDriver of Tesla that plunged off California cliff charged with attempted murder and child abuse",
            //     "description": "California officials have charged the driver of a Tesla that plummeted over 250 feet off a San Mateo highway with attempted murder and child abuse. Dharmesh A. Patel, of Pasadena, California, was driving the vehicle when it went over the side of a coastal roa…",
            //     "url": "https://freerepublic.com/focus/f-news/4120733/posts",
            //     "urlToImage": null,
            //     "publishedAt": "2023-01-04T06:15:36Z",
            //     "content": "Skip to comments.\r\nU.S. \r\nDriver of Tesla that plunged off California cliff charged with attempted murder and child abuseCBS ^\r\n | 03 Jan 2023\r\n | KERRY BREEN\r\nPosted on 01/03/2023 10:15:36 PM PST by… [+1403 chars]"
            //     }
        ]
    }

    const [state , dispatch] = useReducer(NewsReducer , initialState)
    return(
        <NewsContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContext