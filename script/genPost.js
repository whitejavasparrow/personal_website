$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function (res) {
        console.log(res)

        generateContent(res)
    },
    error: function() {
        console.log("Data fetch failure")
    }
})

function generateContent(res) {
    const titleIdx = Math.round(Math.random() * 100) + 1

    let postTemplate = `<h3 class="post-title">${res[titleIdx].title}</h3>`

    let count = 0
    while (count < 15) {
        const paraIdx = Math.round(Math.random() * 100) + 1
        postTemplate += `
            <p class="post-para">${res[paraIdx].body}.</p>
        `
        count++
    }
    console.log(postTemplate)
       
    const postElement = document.querySelector(".post-container")
    postElement.innerHTML = postTemplate
}