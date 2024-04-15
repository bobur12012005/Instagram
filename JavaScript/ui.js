// reloadStories
export function reloadStories(arr, arr2, place) {
    place.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        let user = arr[i]

        let story = document.createElement('div')
        let avatarBox = document.createElement('div')
        let avatar = document.createElement('img')
        let nickname = document.createElement('span')

        story.classList.add('story')
        avatarBox.classList.add('avatarBox')
        avatar.classList.add('avatar')
        nickname.classList.add('nickname')

        avatar.src = arr2[i].url

        if (user.username.length > 10) {
            nickname.innerHTML = user.username.slice(0, 10) + '...'
        } else {
            nickname.innerHTML = user.username
        }

        place.append(story)
        story.append(avatarBox, nickname)
        avatarBox.append(avatar)

        avatarBox.onclick = () => {
            document.querySelector('#modal').style.display = 'flex'
            document.querySelector('#content img').src = arr2[i].url

            document.querySelector('#modal').onclick = (event) => {
                if (event.target === document.querySelector('#modal')) {
                    document.querySelector('#modal').style.display = 'none';
                }
            }
        }
    }
}



// reloadPosts
export function reloadPosts(arr, arr2, arr3, place) {
    place.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        let user = arr[i]

        let post = document.createElement('div')
        let postTop = document.createElement('div')
        let postData = document.createElement('div')
        let postAva = document.createElement('div')
        let postAvaImg = document.createElement('img')
        let postNickname = document.createElement('div')
        let postNick = document.createElement('span')
        let postCountry = document.createElement('span')
        let postOpt = document.createElement('button')
        let postOptImg = document.createElement('img')
        let postMid = document.createElement('div')
        let postMidImg = document.createElement('img')
        let postBot = document.createElement('div')
        let postBotActions = document.createElement('div')
        let postBotLeftActions = document.createElement('div')
        let postBotLike = document.createElement('button')
        let postLikeImg = document.createElement('img')
        let postBotComment = document.createElement('button')
        let postCommentImg = document.createElement('img')
        let postBotSend = document.createElement('button')
        let postSendImg = document.createElement('img')
        let postBotRightActions = document.createElement('div')
        let postBotSave = document.createElement('button')
        let postSaveImg = document.createElement('img')
        let postlikeCounter = document.createElement('span')
        let postDescription = document.createElement('div')
        let postDescriptionNick = document.createElement('b')
        let postDescriptionTxt = document.createElement('p')
        let postComments = document.createElement('div')
        let postcommentRow1 = document.createElement('div')
        let postcomment1 = document.createElement('span')
        let postCommentLikeBtn1 = document.createElement('button')
        let postCommentLikeImg1 = document.createElement('img')
        let postcommentRow2 = document.createElement('div')
        let postcomment2 = document.createElement('span')
        let postCommentLikeBtn2 = document.createElement('button')
        let postCommentLikeImg2 = document.createElement('img')
        let postSeeAllCom = document.createElement('span')
        let postAddComment = document.createElement('div')
        let postSmile = document.createElement('buton')
        let postSmileImg = document.createElement('img')
        let postCommentInput = document.createElement('input')
        let postingTheComment = document.createElement('button')

        post.classList.add('post')
        postTop.classList.add('postTop')
        postData.classList.add('postData')
        postAva.classList.add('postAva')
        postNickname.classList.add('postNickname')
        postNick.classList.add('name')
        postCountry.classList.add('country')
        postOpt.classList.add('postOpt')
        postMid.classList.add('postMid')
        postBot.classList.add('postBot')
        postBotActions.classList.add('actions')
        postBotLeftActions.classList.add('left-acts')
        postBotRightActions.classList.add('right-acts')
        postlikeCounter.classList.add('likeCounter')
        postDescription.classList.add('postDescription')
        postComments.classList.add('postComments')
        postcommentRow1.classList.add('commentRow')
        postcomment1.classList.add('comment')
        postcommentRow2.classList.add('commentRow')
        postcomment2.classList.add('comment')
        postSeeAllCom.classList.add('seeAllCom')
        postAddComment.classList.add('addComment')
        postSmile.classList.add('smile')
        postingTheComment.classList.add('postingTheComment')
        postBotSave.classList.add('postBotSave')
        postSaveImg.classList.add('postSaveImg')

        postOptImg.src = './icons/dots.svg'
        postLikeImg.src = './icons/like.png'
        postCommentImg.src = './icons/comment.png'
        postSendImg.src = './icons/send.png'
        postSaveImg.src = './icons/save.svg'
        postCommentLikeImg1.src = './icons/like.png'
        postCommentLikeImg2.src = './icons/like.png'
        postSmileImg.src = './icons/smile.png'
        postAvaImg.src = arr2[i].url
        postMidImg.src = arr2[i].url

        if (arr3[i].body.length > 70) {
            postcomment2.innerHTML = arr3[i].body.slice(0, 70) + `<b style = "color:#b6b6b6; cursor:pointer;">...more </b>`
        } else {
            postcomment2.innerHTML = arr3[i].body
        }

        postCommentInput.placeholder = 'Add a comment...'
        postlikeCounter.innerHTML = '9,999 likes'
        postSeeAllCom.innerHTML = 'View all comments...'
        postingTheComment.innerHTML = 'Post'
        postcomment1.innerHTML = arr3[i].name
        postDescriptionTxt.innerHTML = arr2[i].title
        postNick.innerHTML = user.username
        postCountry.innerHTML = user.address.city
        postDescriptionNick.innerHTML = user.username

        place.append(post)
        post.append(postTop, postMid, postBot)
        postTop.append(postData, postOpt)
        postData.append(postAva, postNickname)
        postAva.append(postAvaImg)
        postNickname.append(postNick, postCountry)
        postOpt.append(postOptImg)
        postMid.append(postMidImg)
        postBot.append(postBotActions, postlikeCounter, postDescription, postComments, postAddComment)
        postBotActions.append(postBotLeftActions, postBotRightActions)
        postBotLeftActions.append(postBotLike, postBotComment, postBotSend)
        postBotRightActions.append(postBotSave)
        postBotLike.append(postLikeImg)
        postBotComment.append(postCommentImg)
        postBotSend.append(postSendImg)
        postBotSave.append(postSaveImg)
        postDescription.append(postDescriptionNick, postDescriptionTxt)
        postComments.append(postcommentRow1, postcommentRow2, postSeeAllCom)
        postcommentRow1.append(postcomment1, postCommentLikeBtn1)
        postCommentLikeBtn1.append(postCommentLikeImg1)
        postcommentRow2.append(postcomment2, postCommentLikeBtn2)
        postCommentLikeBtn2.append(postCommentLikeImg2)
        postAddComment.append(postSmile, postCommentInput, postingTheComment)
        postSmile.append(postSmileImg)

        let active1 = false
        postBotSave.onclick = () => {
            if (active1 === false) {
                postSaveImg.src = './icons/saveFull.svg'
                active1 = true
            } else {
                postSaveImg.src = './icons/save.svg'
                active1 = false
            }
        }

        let active2 = false
        postBotLike.onclick = () => {
            if (active2 === false) {
                postLikeImg.src = './icons/likeFull.png'
                active2 = true
            } else {
                postLikeImg.src = './icons/like.png'
                active2 = false
            }
        }

        let active3 = false
        postCommentLikeImg1.onclick = () => {
            if (active3 === false) {
                postCommentLikeImg1.src = './icons/likeFull.png'
                active3 = true
            } else {
                postCommentLikeImg1.src = './icons/like.png'
                active3 = false
            }
        }

        let active4 = false
        postCommentLikeImg2.onclick = () => {
            if (active4 === false) {
                postCommentLikeImg2.src = './icons/likeFull.png'
                active4 = true
            } else {
                postCommentLikeImg2.src = './icons/like.png'
                active4 = false
            }
        }

        let postModal = document.querySelector('#postModal')
        let postModalMainPhoto = document.querySelector('.content-left img')
        let postModalAva = document.querySelector('.content-imgNick img')
        let postModalNickname = document.querySelector('.content-imgNick span')
        let postModalLike = document.querySelector('.content-leftActions #content-like img')
        let postModalSave = document.querySelector('.content-rightActions #content-save img')

        let active5 = false
        postModalLike.onclick = () => {
            if (active5 === false) {
                postModalLike.src = './icons/likeFull.png'
                active5 = true
            } else {
                postModalLike.src = './icons/like.png'
                active5 = false
            }
        }

        let active6 = false
        postModalSave.onclick = () => {
            if (active6 === false) {
                postModalSave.src = './icons/saveFull.svg'
                active6 = true
            } else {
                postModalSave.src = './icons/save.svg'
                active6 = false
            }
        }

        postMid.onclick = () => {
            postModal.style.display = 'flex'
            postModalMainPhoto.src = arr2[i].url
            postModalAva.src = arr2[i].url
            postModalNickname.innerHTML = user.username

            postModal.onclick = (event) => {
                if (event.target === postModal) {
                    postModal.style.display = 'none';
                }
            }
        }
    }
}



// reloadSuggestions
export function reloadSuggestion(arr, arr2, place) {
    place.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        let user = arr[i]

        let suggestBox = document.createElement('div')
        let suggestLeft = document.createElement('div')
        let suggestAva = document.createElement('img')
        let suggestData = document.createElement('div')
        let suggestNickname = document.createElement('span')
        let suggestionTxt = document.createElement('span')
        let suggestRight = document.createElement('div')
        let suggestFollow = document.createElement('button')

        suggestBox.classList.add('suggestBox')
        suggestLeft.classList.add('suggestLeft')
        suggestAva.classList.add('suggestAva')
        suggestData.classList.add('suggestData')
        suggestNickname.classList.add('suggestNickname')
        suggestionTxt.classList.add('suggestionTxt')
        suggestRight.classList.add('suggestRight')
        suggestFollow.classList.add('suggestFollow')

        suggestionTxt.innerHTML = 'Suggestion For You'
        suggestFollow.innerHTML = 'Follow'
        suggestNickname.innerHTML = user.username

        suggestAva.src = arr2[i].url

        place.append(suggestBox)
        suggestBox.append(suggestLeft, suggestRight)
        suggestLeft.append(suggestAva, suggestData)
        suggestData.append(suggestNickname, suggestionTxt)
        suggestRight.append(suggestFollow)
    }
}



// reloadComments
export function reloadComments(arr, arr2, arr3, place) {
    place.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        let commentary = arr[i]
        let user = arr2[i]
        let image = arr3[i]

        let comment = document.createElement('div')
        let commentLeft = document.createElement('div')
        let commentRightLikeBtn = document.createElement('button')
        let commentLeftAva = document.createElement('img')
        let commentLeftData = document.createElement('div')
        let commentDataNick = document.createElement('span')
        let commentDataText = document.createElement('p')
        let commentRightLikeImg = document.createElement('img')

        comment.classList.add('comment')
        commentLeft.classList.add('commentLeft')
        commentRightLikeBtn.classList.add('commentRightLikeBtn')
        commentLeftAva.classList.add('commentLeftAva')
        commentLeftData.classList.add('commentLeftData')

        commentRightLikeImg.src = './icons/like.png'
        commentLeftAva.src = image.url

        commentDataNick.innerHTML = user.username
        commentDataText.innerHTML = commentary.body

        place.append(comment)
        comment.append(commentLeft, commentRightLikeBtn)
        commentLeft.append(commentLeftAva, commentLeftData)
        commentLeftData.append(commentDataNick, commentDataText)
        commentRightLikeBtn.append(commentRightLikeImg)

        let isActivated = false
        commentRightLikeImg.onclick = () => {
            if (isActivated === false) {
                commentRightLikeImg.src = './icons/likeFull.png'
                isActivated = true
            } else {
                commentRightLikeImg.src = './icons/like.png'
                isActivated = false
            }
        }
    }
}



// other functions
let bgColorMode = document.querySelector('#darkLight_mode')
let body = document.body
let logotype = document.querySelector('.logotype img')
let home = document.querySelector('#home img')
let messages = document.querySelector('#messages img')
let navigator = document.querySelector('#navigator img')
let notifications = document.querySelector('#notifications img')
let darkLight_mode = document.querySelector('#darkLight_mode img')
let previousImg = document.querySelector('#previous img')
let nextImg = document.querySelector('#next img')

bgColorMode.onclick = () => {
    if (!body.classList.contains('darkMode')) {
        body.classList.add('darkMode')
        logotype.src = './logo/lightLogo.svg'
        home.src = './IconsLight/home.svg'
        messages.src = './IconsLight/messages.svg'
        navigator.src = './IconsLight/navigator.svg'
        notifications.src = './IconsLight/notifications.svg'
        darkLight_mode.src = './IconsLight/sun.svg'
        previousImg.src = './icons/previous.png'
        nextImg.src = './icons/next.png'
    } else {
        body.classList.remove('darkMode')
        logotype.src = './logo/logo.svg'
        home.src = './Icons/home.svg'
        messages.src = './Icons/messages.svg'
        navigator.src = './Icons/navigator.svg'
        notifications.src = './Icons/notifications.svg'
        darkLight_mode.src = './Icons/moon.svg'
        previousImg.src = './iconsLight/previous.png'
        nextImg.src = './iconsLight/next.png'
    }
}



let storiesCont = document.querySelector('.leftSide-cont .leftSide-top')
let nextButton = document.querySelector('#next')
let prevButton = document.querySelector('#previous')

nextButton.onclick = () => {
    storiesCont.scrollTo({
        left: storiesCont.scrollLeft + 400,
        behavior: 'smooth'
    })
}

prevButton.onclick = () => {
    storiesCont.scrollTo({
        left: storiesCont.scrollLeft - 400,
        behavior: 'smooth'
    })
}