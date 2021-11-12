import { useState, useEffect } from "react";
import { TrendingCoinsStyle } from "./styles/TrendingCoins.style";
import { Title } from "./styles/Title.style";

import { NewsContainer, ViewMore } from "./styles/NewsContainer.style";
const NewsComponent = ({ currency }) => {
 const [newsCount, setNewsCount] = useState(4);

 // fetch news articles
 const [newsRes, setNewsRes] = useState({});
 useEffect(() => {
  const fetchNews = async () => {
   // if news is saved in cookies then use that instead
   if (
    localStorage.getItem(currency) !== null &&
    localStorage.getItem("expirationDate") !== null &&
    localStorage.getItem("expirationDate").length > 0
   ) {
    // get unix time
    const expirationDate = parseInt((new Date(localStorage.getItem("expirationDate")).getTime() / 1000).toFixed(0));
    const timeNow = parseInt((new Date().getTime() / 1000).toFixed(0));

    const timeDifference = timeNow - expirationDate;
    const oneDay = 86400;
    // more than a day
    if (timeDifference < oneDay) {
     setNewsRes(JSON.parse(localStorage.getItem(currency)));
     return;
    }
   }
   // const url = `/api/news?q=${currency}`;
   const apiKey = "1da1c1c8637945f4b5772f9cc1b650cc";
   const currRangeDateUNIX = (new Date().getTime() / 1000).toFixed(0);
   // 604800 = 7 days
   const prevRangeUNIX = currRangeDateUNIX - 604800;
   const date = new Date(prevRangeUNIX * 1000);
   const dateFormate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

   const url = `https://newsapi.org/v2/everything?q=${currency} crypto&from=${dateFormate}&to=${currRangeDateUNIX}&sortBy=popularity&apiKey=${apiKey}`;

   // fetch new data if no news is saved in cookies
   try {
    const res = await fetch(url);
    const json = await res.json();
    // if error fetching news, just use cookies if available even if expired
    if (json.status !== "ok" && localStorage.getItem(currency) !== null && localStorage.getItem(currency).length > 0) {
     setNewsRes(JSON.parse(localStorage.getItem(currency)));
     return;
    }
    setNewsRes(json);

    // store news as cookie to avoid extra fetch
    if (currency) {
     const timeNow = new Date();
     localStorage.setItem("expirationDate", timeNow);
     localStorage.setItem(currency, JSON.stringify(json));
    }
   } catch (error) {
    console.error("error fetching NEWS:");
    console.error(error);

    // if error fetching new news, check if news already saved as cookie,
    // if so then use the old news to fill the place
    if (localStorage.getItem(currency) !== null && localStorage.getItem(currency).length > 0)
     setNewsRes(JSON.parse(localStorage.getItem(currency)));
   }
  };

  fetchNews();
 }, [currency]);

 const getMonth = (month) => {
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return monthNames[month];
 };
 // load more news
 const loadMoreNews = () => (newsCount >= 8 ? setNewsCount(4) : setNewsCount(8));

 return (
  <TrendingCoinsStyle>
   <Title>News</Title>
   {newsRes !== undefined && newsRes !== null && newsRes.status === "ok" && newsRes.articles.length > 0 ? (
    <>
     {newsRes.articles.slice(0, newsCount).map((news, index) => {
      return (
       <a target="_blank" rel="noopener noreferrer" href={news.url} key={index}>
        <NewsContainer>
         <div className="newInfo">
          <h1>{news.title}</h1>
          <div className="articleInfo">
           <span>{news.source.name} |</span>
           <span>
            {getMonth(new Date(news.publishedAt).getMonth())} {new Date(news.publishedAt).getDate()}
           </span>
          </div>
         </div>
         <div className="thumbnailContainer">
          <img src={news.urlToImage} alt="news article thumbnail" />
         </div>
        </NewsContainer>
       </a>
      );
     })}
     <ViewMore onClick={() => loadMoreNews()}>
      <span>{newsCount <= 4 ? "View More" : "View Less"}</span>
      <img
       src="../imgs/viewMore.svg"
       alt="icon"
       style={{ transform: newsCount <= 4 ? "rotate(0deg)" : "rotate(180deg)" }}
      />
     </ViewMore>
    </>
   ) : (
    "Unable to fetch NEWS articles"
   )}
  </TrendingCoinsStyle>
 );
};

export default NewsComponent;
