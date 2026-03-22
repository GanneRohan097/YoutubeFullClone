import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchVideoDetails } from '../youtube'
import { FaThumbsUp, FaEye, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Watch = ({ videos }) => {
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);
      const navigate = useNavigate();
    useEffect(() => {
        const getvideo = async () => {
            const data = await fetchVideoDetails(videoId);
            setVideo(data);
        }
        getvideo();
    }, [videoId]);
    if (!video) return <div className="bg-black text-white p-4">Loading...</div>;
    const { title, channelTitle, description } = video.snippet;
    const { viewCount, likeCount, commentCount } = video.statistics;
    return (
        <div className='md:flex bg-black text-white p-4'>
            <div className='w-full'>
                <iframe
                    width="100%"
                    height="500px"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                    className='rounded'
                />
                <div>
                    <h1 className='font-bold text-xl' >{title}</h1>
                    <p className='font-semibold text-gray-400'>{channelTitle}</p>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-2'> <FaEye />{viewCount}</p>
                        <p className='flex items-center gap-2 bg-white text-black px-2 rounded-lg'><FaThumbsUp />{likeCount} likes</p>
                        <p className='flex items-center gap-2'><FaComment />{commentCount}</p>
                    </div>

                </div>
            </div>

            <div className='w-80 flex flex-col gap-3 overflow-y-auto ml-4'>
                {videos.map((video) => {
                    const id = video.id?.videoId || video.id;
                    return (
                        <div key={id} onClick={() => navigate(`/watch/${id}`)} className='gap-2 cursor-pointer hover:bg-[#222222] p-1 rounded'>
                            <img className='w-full h-24 object-cover rounded' src={video.snippet.thumbnails.medium.url} alt="" />
                            <div>
                                <h3 className='text-sm font-semibold line-clamp-2'>{video.snippet.title}</h3>
                                <p className='text-gray-400 text-xs mt-1'>{video.snippet.channelTitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Watch