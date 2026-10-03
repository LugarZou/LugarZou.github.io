import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import dongtouSeaImage from '../../Images/DongtouSea.png';
import baoanAirportImage from '../../Images/260617宝安机场.png';

type StorySlide = {
    image?: string;
    imageAlt?: string;
    title: string;
    textZh: string;
    textEn: string;
};

const storySlides: StorySlide[] = [
    {
        title: '乙巳十月十四作七律咏今年事',
        textZh: '何忧岸谷系离舟 应喜还乡未白头\n且御金觞从旧友 莫凭冷月赋新愁\n风流逸少千秋圣 丘壑深猷一县侯\n快买桂花同载酒 花间晚照与君留',
        textEn: '',
    },
    {
        image: baoanAirportImage,
        imageAlt: '深圳宝安机场内的面包与咖啡',
        title: '',
        textZh: '以出差深圳之便 早至两日访旧 而雨雾氤氲 加之白日烈烈 如在蒸笼之中 便得见旧友 意觉缺缺 丙午六月初四晚飞离深圳 又暴雨致误 以其隙作此\n\n访旧薄游南海岸\n万山渡尽雨来拦\n乌云无计重年少\n不许相逢是晴天',
        textEn: '',
    },
    {
        image: dongtouSeaImage,
        imageAlt: '洞头海边咖啡馆窗前的咖啡、面包与花',
        title: '',
        textZh: '家住海西头 闲坐望天涯\n明日海东去 天涯即是家\n与父母往洞头望海 念不及旬日便赴加州 作此以记\n丙午年七月初四于洞头甜梦咖啡',
        textEn: '',
    },
];

export default function StoryCard() {
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const activeSlide = storySlides[activeStep];
    const hasTitle = activeSlide.title.trim() !== '';

    const handleOpen = () => {
        setActiveStep(0);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setActiveStep(0);
    };

    const handleNext = () => {
        setActiveStep((step) => (step + 1) % storySlides.length);
    };

    const handleBack = () => {
        setActiveStep((step) => (step - 1 + storySlides.length) % storySlides.length);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
            handleBack();
        } else if (event.key === 'ArrowRight') {
            handleNext();
        }
    };

    return (
        <>
            <ButtonBase
                onClick={handleOpen}
                aria-label="打开图文集 Open stories"
                sx={{ display: 'block', width: '100%', borderRadius: 1, textAlign: 'left' }}
            >
                <Paper elevation={1} sx={{ p: 2, width: '100%' }}>
                    <Typography variant="h5">有文有笔</Typography>
                    <Typography variant="body1" color="text.secondary">
                        “今之常言，有文有笔，以为无韵者笔也，有韵者文也。”<br/>
                        《文心雕龙·总术》南朝梁 刘勰
                    </Typography>
                </Paper>
            </ButtonBase>

            <Dialog
                open={open}
                onClose={handleClose}
                onKeyDown={handleKeyDown}
                fullScreen={fullScreen}
                fullWidth
                maxWidth={activeSlide.image ? 'md' : 'sm'}
                aria-labelledby={hasTitle ? 'story-slide-title' : undefined}
                aria-label={hasTitle ? undefined : '图文内容 Story'}
                PaperProps={{ sx: { position: 'relative', overflow: 'hidden' } }}
            >
                <IconButton
                    onClick={handleClose}
                    aria-label="关闭 Close"
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        bgcolor: 'rgba(255, 255, 255, 0.88)',
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent sx={{ p: 0 }}>
                    {activeSlide.image && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: { xs: 280, sm: 420 },
                                p: { xs: 1, sm: 2 },
                                bgcolor: 'grey.100',
                            }}
                        >
                            <Box
                                component="img"
                                src={activeSlide.image}
                                alt={activeSlide.imageAlt ?? ''}
                                sx={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    width: 'auto',
                                    height: { xs: '42vh', sm: '56vh' },
                                    maxHeight: 620,
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    )}

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: activeSlide.image ? 'flex-start' : 'center',
                            minHeight: activeSlide.image ? 'auto' : { xs: '100%', sm: 280 },
                            px: { xs: 2, sm: 3 },
                            pt: activeSlide.image ? 2 : { xs: 8, sm: 6 },
                            pb: 2,
                        }}
                    >
                        {hasTitle && (
                            <Typography id="story-slide-title" variant="h5" gutterBottom>
                                {activeSlide.title}
                            </Typography>
                        )}
                        <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                            {activeSlide.textZh}
                            {activeSlide.textEn && (
                                <>
                                    <br />
                                    {activeSlide.textEn}
                                </>
                            )}
                        </Typography>

                        <MobileStepper
                            variant="dots"
                            steps={storySlides.length}
                            position="static"
                            activeStep={activeStep}
                            sx={{ mt: 2, px: 0, bgcolor: 'transparent' }}
                            nextButton={
                                <Button size="small" onClick={handleNext}>
                                    下一页 Next
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
                                    上一页 Back
                                </Button>
                            }
                        />
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}
