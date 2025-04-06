import React, { useState } from 'react';
import { addArticle } from './api';

const ArticleForm = () => {
    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addArticle({ titre, contenu });
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
            <textarea placeholder="Contenu" value={contenu} onChange={(e) => setContenu(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default ArticleForm;
