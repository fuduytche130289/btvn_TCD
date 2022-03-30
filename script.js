const search = document.querySelector(".search")
const box = document.querySelector(".input")
const newsList = document.querySelector(".list")

search.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        newsList.innerHTML = ''
        event.preventDefault()
        const apiKey = "358a0f2f34bd446987cf461bc88e0176"
        let topic = box.value

        let apiNews = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

        fetch(apiNews).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            data.articles.forEach(article => {
                let liNode = document.createElement('li')
                let a = document.createElement('a')
                a.setAttribute('href', article.url)
                a.innerHTML = `
                            <img src = "${article.urlToImage}"/>
                            <div class="content" >
                            <h1>${article.title}</h1>
                            <p>${article.content}</p>
                            </div>
                        `

                liNode.appendChild(a)
                newsList.appendChild(liNode)
            })
        })

        console.log(topic)
    }
})