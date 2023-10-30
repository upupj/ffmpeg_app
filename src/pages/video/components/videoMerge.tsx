import { FFmpeg } from '@ffmpeg/ffmpeg';
import { useRef } from 'react';

const videoMerge = () => {
    const ffmpegRef = useRef(new FFmpeg());

    console.log(ffmpegRef);
    return <div>
        111
    </div>
}

export default videoMerge