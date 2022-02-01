import Posts from "./Posts";
import Card from "./Card";
import Banner from "./Banner";

import star from "../svg/icon-star.svg";

//API & HOOKS
import api from "services/api";
import { useState, useEffect } from "react";

import IPost from "interface/IPost";

const MainContent = () => {
    const [post, setPost] = useState<IPost[]>([]);
    const [banner, setBanner] = useState<IPost[]>([]);
    const [mostSeen, setMostSeen] = useState<IPost[]>([]);

    useEffect(() => {
        api.get('/posts?star=5&_limit=2')
            .then((response) => {
                setPost(response.data);
            });

        api.get('/posts?id=8&_limit=1')
            .then((response) => {
                setBanner(response.data);
            });

        api.get('/posts?_limit=3')
            .then((response) => {
                setMostSeen(response.data);
            });
    }, []);


    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="grid-5 pt-5 pb-3">
                        <img src={star} className="icon-l" alt="Star Blog" />
                        <h2 className="mt-1">Os melhores e mais bem votados posts do mês.</h2>

                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ornare urna pharetra ut ac, pellentesque.
                        </p>
                    </div>
                    <div className="grid-7">
                        {
                            post.map((item) => {
                                console.log(`ItemCompleto: ${item}`);
                                return <Posts key={item.id} id={item.id} date={item.date} imageUrl={item.imageUrl} category={item.category} title={item.title} resume={item.resume} duration={item.duration} star={item.star} views={item.views} status={item.status} id_user={item.id_user} content={item} />
                            })
                        }
                    </div>
                </div>
            </section>
            <div className="bg-section">
                <section className="container">
                    <h3 className="ml-2 mb-3">Mais vistos</h3>
                    <div className="row">
                        {
                            mostSeen.map((item) => {
                                return <Card key={item.id} id={item.id} date={item.date} imageUrl={item.imageUrl} category={item.category} title={item.title} resume={item.resume} duration={item.duration} star={item.star} views={item.views} status={item.status} id_user={item.id_user} content={item} />
                            })
                        }
                    </div>
                </section>
            </div>
            {
                banner.map((item) => {
                    return <Banner key={item.id} id={item.id} date={item.date} imageUrl={item.imageUrl} category={item.category} title={item.title} resume={item.resume} duration={item.duration} star={item.star} views={item.views} status={item.status} id_user={item.id_user} content={item} />
                })
            }
        </>

    )
}

export default MainContent;