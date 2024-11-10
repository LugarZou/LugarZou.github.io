import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { CVPKUIcon, CVUIUCIcon, CVHarvardIcon } from './CVIcon';
import Typography from '@mui/material/Typography';

interface IntervalInstanceProps {
    time: string;
    event: string;
    description: string;
    Icon: any;
    mentor: string;
    link: string;
}

const IntervalInstance: React.FC<IntervalInstanceProps> = ({ time, event, description, Icon, mentor, link }) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{
                    backgroundColor: '#FFFFFF'
                }}>
                    <Icon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {event}
                </Typography>
                <Typography>{description}</Typography>
                {mentor !== '' && link !== '' && (
                    <Typography>
                        Mentor: <a href={link}>{mentor}</a>
                    </Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    )
}

export function EducationTimeline() {
    return (
        <Timeline position="alternate">
            <IntervalInstance time="Sept.2021 - Ongoing" event="Peking University" description="Bachelor, Information and Computing Science" Icon={CVPKUIcon} mentor='' link='' />
        </Timeline >
    );
}

export function ResearchTimeline() {
    return (
        <Timeline position="alternate">
            <IntervalInstance time="Apr.2024 - Ongoing" event="Harvard University" description='Research Intern' Icon={CVHarvardIcon} mentor='Susan A. Murphy' link='https://people.seas.harvard.edu/~samurphy/' />
            <IntervalInstance time="Jun.2023 - Feb.2024" event="University of Illinois Urbana-Champaign" description="Research Intern" Icon={CVUIUCIcon} mentor='Jiaxuan You' link='https://cs.stanford.edu/people/jiaxuan/' />
        </Timeline>
    )
}

{/*
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem>
*/}