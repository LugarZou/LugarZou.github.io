import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import storyImage1 from '../../Images/AlbumPhoto1.png';
import storyImage2 from '../../Images/AlbumPhoto2.png';
import storyImage3 from '../../Images/AlbumPhoto3.png';

type StorySlide = {
    image: string;
    imageAlt: string;
    title: string;
    textZh: string;
    textEn: string;
};

const storySlides: StorySlide[] = [
    {
        image: storyImage1,
        imageAlt: '图文集示例图片一',
        title: '片段一 Fragment I',
        textZh: '这里可以放与这张图片对应的中文文字。',
        textEn: 'English text associated with this image can be placed here.',
    },
    {
        image: storyImage2,
        imageAlt: '图文集示例图片二',
        title: '片段二 Fragment II',
        textZh: '每一页都可以使用不同长度的文字，弹窗内容会自动适应。',
        textEn: 'Each page can contain text of a different length, and the dialog will adapt.',
    },
    {
        image: storyImage3,
        imageAlt: '图文集示例图片三',
        title: '片段三 Fragment III',
        textZh: '这些图片和文字目前用于展示交互，之后可以直接替换。',
        textEn: 'These images and captions currently demonstrate the interaction and can be replaced later.',
    },
];

export default function StoryCard() {
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const activeSlide = storySlides[activeStep];

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
                    <Typography variant="h5">图文集 Stories</Typography>
                    <Typography variant="body1" color="text.secondary">
                        图片与文字的片段，点击翻阅。<br />
                        Images and the words that accompany them.
                    </Typography>
                </Paper>
            </ButtonBase>

            <Dialog
                open={open}
                onClose={handleClose}
                onKeyDown={handleKeyDown}
                fullScreen={fullScreen}
                fullWidth
                maxWidth="md"
                aria-labelledby="story-dialog-title"
            >
                <DialogTitle
                    id="story-dialog-title"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    图文集 Stories
                    <IconButton onClick={handleClose} aria-label="关闭 Close">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers sx={{ p: 0 }}>
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
                            alt={activeSlide.imageAlt}
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

                    <Box sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            {activeSlide.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {activeSlide.textZh}<br />
                            {activeSlide.textEn}
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
