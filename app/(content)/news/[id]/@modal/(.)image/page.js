"use client"

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
    const router = useRouter()
    const newsItemSlug = params.id;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug)

    if (!newsItem) {
        notFound();
    }
    return (<>
        <div className="modal-backdrop" onClick={router.back}/>
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} />
            </div>
        </dialog>

    </>
    );
}