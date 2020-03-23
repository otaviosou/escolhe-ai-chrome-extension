document.addEventListener('DOMContentLoaded', function(){

    let choice
    let xml = new XMLHttpRequest()
    xml.open("GET", "https://escolhe-ai-server.herokuapp.com", true)
    xml.send()
    xml.onreadystatechange = function(){

        if(xml.status == 200 && xml.readyState == 4){
            let data = JSON.parse(xml.responseText)
            choice = data[0].list_movies
        }
    }

    document.querySelector('a').addEventListener('click', () => {

 
        chrome.tabs.update({url: "https://netflix.com" + choice[Math.floor(Math.random() * choice.length)]})
    })
})




