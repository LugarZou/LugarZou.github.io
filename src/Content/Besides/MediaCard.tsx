import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const GITHUB_RAW_PREFIX = "https://raw.githubusercontent.com/LugarZou/LugarZou.github.io/master/src/Music/";
// 手动列出 src/Music 下的 mp3 文件名
const musicFiles = [
    'Chopin-Op23,No1.mp4',
    'Chopin-Op47,No3.mp3',
    'Chopin-Op52,No4.mp3'
];

// 解析文件名，提取作者和曲名
function parseMusicFileName(name: string) {
    // Chopin-Op47,No3.mp3/mp4/mov => Chopin, Op47,No3
    const base = name.replace(/\.(mp3|mp4|mov)$/i, '');
    const dashIdx = base.indexOf('-');
    if (dashIdx > 0) {
        return {
            artist: base.slice(0, dashIdx),
            title: base.slice(dashIdx + 1),
        };
    } else {
        return {
            artist: 'Unknown',
            title: base,
        };
    }
}

const tracks = musicFiles.map((file) => {
    const { artist, title } = parseMusicFileName(file);
    return {
        title,
        artist,
        src: `${GITHUB_RAW_PREFIX}${file}`,
        cover: 'https://github.com/LugarZou/LugarZou.github.io/blob/master/src/Images/marshall.jpg?raw=true', // 可自定义封面
    };
});

export default function MediaControlCard() {
    const theme = useTheme();
    const [playing, setPlaying] = React.useState(false);
    const [trackIndex, setTrackIndex] = React.useState(0);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    const handlePrev = () => {
        setTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
        setPlaying(false);
    };

    const handleNext = () => {
        setTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
        setPlaying(false);
    };

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            if (playing) {
                audioRef.current.play();
            }
        }
        // eslint-disable-next-line
    }, [trackIndex]);

    return (
        <Card sx={{ display: 'flex', mt: 4 }}>
            {/* 左侧描述区 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', p: 2, minWidth: 180 }}>
                <Typography variant="h5" gutterBottom>
                    音乐 Music
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    我喜欢听的音乐很杂，浪漫主义、粤语等不一而足。<br />
                    I enjoy a wide variety of music, from Romanticism to Cantonese and more.<br />
                </Typography>
            </Box>
            {/* 播放器区 */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {tracks[trackIndex].title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {tracks[trackIndex].artist}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous" onClick={handlePrev}>
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={handlePlayPause}>
                        {playing ? (
                            <PauseIcon sx={{ height: 38, width: 38 }} />
                        ) : (
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        )}
                    </IconButton>
                    <IconButton aria-label="next" onClick={handleNext}>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
                <audio
                    ref={audioRef}
                    src={tracks[trackIndex].src}
                    onEnded={handleNext}
                />
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={tracks[trackIndex].cover}
                alt={tracks[trackIndex].title + ' cover'}
            />
        </Card>
    );
}