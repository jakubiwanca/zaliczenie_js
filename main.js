document.getElementById('fetchNews').addEventListener('click', fetchNews);

async function fetchNews() {
    const category = document.getElementById('category').value;
    const apiKey = '3efbaf3803d7443393bf49898ad48ca7';
    const url = `https://newsapi.org/v2/top-headlines?country=pl${category ? `&category=${category}` : ''}&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            console.error('Blad w wyszukiwaniu wiadomosci:', data);
        }
    } catch (error) {
        console.error('Blad w wyszukiwaniu wiadomosci:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'newsItem';
        const newsTitle = document.createElement('h2');
        newsTitle.textContent = article.title;
        const newsDescription = document.createElement('p');
        newsDescription.textContent = article.description;
        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDescription);
        newsContainer.appendChild(newsItem);
    });
}
