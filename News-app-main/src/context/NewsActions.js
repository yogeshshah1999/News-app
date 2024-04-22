export const getNews = async(topic) =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2022-12-05&sortBy=publishedAt&apiKey=7db3d2eca27640bebf2cd0cdb407b8e8`)
    const data = await response.json()
    return data.articles
    // console.log(data)
}