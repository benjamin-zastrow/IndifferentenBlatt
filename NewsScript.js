//mit JQuery
var loadedArticles = 0;
var JSONResponse;

function appendLoadMoreButton() {
    var lmButton = document.createElement('input');
    lmButton.type = 'image';
    lmButton.src = 'img/down-chevron.png';
    lmButton.name = 'loadMoreButton';
    lmButton.id = 'loadMoreButton';
    lmButton.title = 'weitere Artikel laden';
    lmButton.onclick = function() {loadNextArticles();};
    document.getElementsByTagName("main")[0].appendChild(lmButton);
}

function loadNextArticles() {
    document.getElementsByTagName("main")[0].removeChild(document.getElementById('loadMoreButton'));
    var title = $(document).find("title").text();
    var lastArticle = $("main").children().last().children().last().text();
    var continueNow = false;
    var newMax = 0;
    if(title.includes('HOME')) {
        for(i = 0; i < 4; ++i) {
            var topic;
            switch(i) {
                case 0: topic = "National"; break;
                case 1: topic = "International"; break;
                case 2: topic = "Wirtschaft"; break;
                case 3: topic = "Politik"; break;
            }
            for(j = 0; j < JSONResponse[topic].length; ++j) {
                if(newMax >= 4) {break;}
                if(continueNow) {
                    var newArticle = document.createElement('article');
                    newArticle.innerHTML = "<p>" + JSONResponse[topic][j][0] + "</p><p>" + JSONResponse[topic][j][1] + "</p>";
                    document.getElementsByTagName("main")[0].appendChild(newArticle);
                    loadedArticles++;
                    newMax++;
                }
                if(JSONResponse[topic][j][1] == lastArticle) {
                    continueNow = true;
                }
            }
        }
        if(loadedArticles >= JSONResponse["International"].length + JSONResponse["National"].length + JSONResponse["Politik"].length + JSONResponse["Wirtschaft"].length) {
            return;
        }
    } else if(title.includes('National')) {
        var newMax = loadedArticles + 4;
        for(i = loadedArticles; i < newMax; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['National'][i][0] + "</p><p>" + JSONResponse['National'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(i >= JSONResponse['National'].length - 1) {return;}
        }
    } else if(title.includes('International')) {
        var newMax = loadedArticles + 4;
        for(i = loadedArticles; i < newMax; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['International'][i][0] + "</p><p>" + JSONResponse['International'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(i >= JSONResponse['International'].length - 1) {return;}
        }
    } else if(title.includes('Politik')) {
        var newMax = loadedArticles + 4;
        for(i = loadedArticles; i < newMax; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['Politik'][i][0] + "</p><p>" + JSONResponse['Politik'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(i >= JSONResponse['Politik'].length - 1) {return;}
        }
    } else if(title.includes('Wirtschaft')) {
        var newMax = loadedArticles + 4;
        for(i = loadedArticles; i < newMax; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['Wirtschaft'][i][0] + "</p><p>" + JSONResponse['Wirtschaft'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(i >= JSONResponse['Wirtschaft'].length - 1) {return;}
        }
    }
    appendLoadMoreButton();
}

function ParseNewsJSON() {
    //Nachrichten Parsen und in HTML injecten
    var title = $(document).find("title").text();
    loadedArticles = 0;

    if(title.includes('HOME')) {
        for(i = 0; i < 4; ++i) {
            var topic;
            switch(i) {
                case 0: topic = "National"; break;
                case 1: topic = "International"; break;
                case 2: topic = "Wirtschaft"; break;
                case 3: topic = "Politik"; break;
            }
            for(j = 0; j < JSONResponse[topic].length; ++j) {
                var newArticle = document.createElement('article');
                newArticle.innerHTML = "<p>" + JSONResponse[topic][j][0] + "</p><p>" + JSONResponse[topic][j][1] + "</p>";
                document.getElementsByTagName("main")[0].appendChild(newArticle);
                loadedArticles++;
                if(loadedArticles >= 6) {
                    appendLoadMoreButton();
                    return;
                }
            }
        }
    } else if(title.includes('National')) {
        for(i = 0; i < JSONResponse["National"].length; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['National'][i][0] + "</p><p>" + JSONResponse['National'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(loadedArticles >= 6 && JSONResponse["National"].length > 6) {
                appendLoadMoreButton();
                break;
            }
        }
    } else if(title.includes('International')) {
        for(i = 0; i < JSONResponse["International"].length; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['International'][i][0] + "</p><p>" + JSONResponse['International'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(loadedArticles >= 6 && JSONResponse["International"].length > 6) {
                appendLoadMoreButton();
                break;
            }
        }
    } else if(title.includes('Politik')) {
        for(i = 0; i < JSONResponse["Politik"].length; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['Politik'][i][0] + "</p><p>" + JSONResponse['Politik'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(loadedArticles >= 6 && JSONResponse["Politik"].length > 6) {
                appendLoadMoreButton();
                break;
            }
        }
    } else if(title.includes('Wirtschaft')) {
        for(i = 0; i < JSONResponse["Wirtschaft"].length; ++i) {
            var newArticle = document.createElement('article');
            newArticle.innerHTML = "<p>" + JSONResponse['Wirtschaft'][i][0] + "</p><p>" + JSONResponse['Wirtschaft'][i][1] + "</p>";
            document.getElementsByTagName("main")[0].appendChild(newArticle);
            loadedArticles++;
            if(loadedArticles >= 6 && JSONResponse["Wirtschaft"].length > 6) {
                appendLoadMoreButton();
                break;
            }
        }
    }
}

$(document).ready(function() {
    //Hintergrundfarbe zufällig
    var random = Math.floor((Math.random() * 10));
    var color;
    switch(random) {
        case 0: color = "azure"; break;
        case 1: color = "cornsilk"; break;
        case 2: color = "beige"; break;
        case 3: color = "ghostwhite"; break;
        case 4: color = "honeydew"; break;
        case 5: color = "lavender"; break;
        case 6: color = "lightyellow"; break;
        case 7: color = "moccasin"; break;
        case 8: color = "papayawhip"; break;
        case 9: color = "seashell"; break;
    }
    $("body").css("background-color", color);
    $("nav li img").css("background-color", color);
    $("nav").css("background-color", color);

    //Nachrichten laden
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'readArticles.php');
    xhr.responseType = 'json';
    xhr.onload = function() {
        if(xhr.status != 200) {
            alert('Error ${xhr.status}: ${xhr.statusText}');
        }
        else {
            JSONResponse = xhr.response;
            ParseNewsJSON();
        }
    }
    xhr.send();
})