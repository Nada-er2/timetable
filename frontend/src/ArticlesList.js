import React, { useEffect, useState } from 'react';
import { getArticles, deleteArticle } from './api';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then(response => setArticles(response.data));
    }, []);

    return (
        <div>
            <h2>Liste des articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        {article.titre} - {article.contenu}
                        <button onClick={() => deleteArticle(article.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticlesList;
