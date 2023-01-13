import React from "react";
import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";
function CommonMap(props) {
    let API_URL = props.url;
    const { data, loading, error } = useFetch(API_URL);
    console.log("PropsNAme", data);
    return(
    <>
        {loading ? (
        <div className="loaderMain">
            <span className="loader"></span>
            {/* <h1 style={{color:'rgba(162,77,211)', display:'block'}}>loading</h1> */}
        </div>
        ) : !loading && !error ? (
        <div>
            <section className="posts-listing">
            {data.map((el) => {
                return (
                <article className="post-item" key={el.id} id={el.id}>
                    <div className="post-item__inner" >
                    <div
                        className="post-item__thumbnail-wrapper"
                        style={{
                        backgroundImage: `url(${el.imageUrl})`,
                        backgroundSize: "100% 100%",
                        }}
                    >
                        <div className="post-item__thumbnail"></div>
                    </div>

                    <div className="post-item__content-wrapper">
                        <h2 className="post-item__title heading-size-4">
                        <span>{el.title}</span>
                        </h2>

                        <div className="post-item__metas">
                        <time className="post-item__meta post-item__meta--date">
                            {el.date}
                        </time>
                        <p className="post-item__meta post-item__meta--category">
                            author : {el.author}
                        </p>
                        </div>

                        <div className="post-item__excerpt">{el.content}</div>

                        <div className="post-item__read-more-wrapper">
                            <Link to={`/detail/${el.id}`} state={{author : el.author , date: el.date , title : el.title, content:el.content}}>
                                <p className="post-item__read-more">Read more</p>
                            </Link>
                        
                        </div>
                    </div>
                    </div>
                </article>
                );
            })}
            </section>
        </div>
        ) : (
        <h1>Sorry, Data can't be load</h1>
        )}
    </>
    )
}

export default CommonMap;
