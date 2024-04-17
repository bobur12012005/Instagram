import { reloadStories } from "./ui.js"
import { reloadPosts } from "./ui.js"
import { reloadSuggestion } from "./ui.js"
import { reloadComments } from "./ui.js"

let storiesCont = document.querySelector('.leftSide-cont .leftSide-top')
let postsCont = document.querySelector('.leftSide-cont .leftSide-bottom')
let suggestionsCont = document.querySelector('.othUsers .bottomOthUsers')
let commentsCont = document.querySelector('.content-right .content-comments')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        reloadStories(users, photos.slice(0, 10), storiesCont)
                        reloadPosts(users, photos.slice(0, 10), comments.slice(0, 10), postsCont)
                        reloadSuggestion(users.slice(0, 5), photos.slice(0, 5), suggestionsCont)
                        reloadComments(comments, users.slice(0, 10), photos.slice(0, 10), commentsCont)
                    })
            })
    })