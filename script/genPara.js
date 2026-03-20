generateParagraphs()

// function generateParagraphs() {
//     const fragment = document.createDocumentFragment();

//     let count = 1
//     for (let i = 1; i <= 100; i++) {
//         const newElement = document.createElement('p');
//         newElement.innerHTML = `<p>This is post number ${count}</p>`;
//         fragment.appendChild(newElement);

//         newElement.innerHTML = `<a href="./fake_post.html" class="post-link">This is post number ${count}</a>`;

//         count = count + 1;
//     }

//     document.body.appendChild(fragment);

//     if (count <= 100) {
//         setTimeout(generateParagraphs, 0);
//     }
// }

function generateParagraphs() {
    let postsTemplate = ""
    for (let i = 1; i <= 100; i++) {
        postsTemplate += `<a href="./fake_post.html" class="post-link">Post ${i}</a>`
    }

    const containerElement = document.querySelector(".post-container")
    containerElement.innerHTML = postsTemplate
}