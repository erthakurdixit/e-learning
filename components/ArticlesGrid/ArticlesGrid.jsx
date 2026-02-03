import React from 'react';
import styles from './ArticlesGrid.module.scss';
import ArticleCard from '@/components/ArticleCard/ArticleCard';


const ArticlesGrid = ({articlesData}) => {
  return (
    < div className={styles.grid} >
      {
        articlesData.map((article) => (
          <ArticleCard
            key={article.id}
            {...article}
          />
        ))
      }
    </div >
  );
};

export default ArticlesGrid;