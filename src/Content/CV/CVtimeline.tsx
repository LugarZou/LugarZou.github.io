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
    connectorVisibility: number
}

const IntervalInstance: React.FC<IntervalInstanceProps> = ({ time, event, description, Icon, mentor, link, connectorVisibility }) => {
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
                {/* Display upper connector if the first bit is set */}
                {connectorVisibility & 0b01 ? <TimelineConnector /> : null}
                <TimelineDot sx={{
                    backgroundColor: '#FFFFFF'
                }}>
                    <Icon />
                </TimelineDot>
                {/* Display lower connector if the second bit is set */}
                {connectorVisibility & 0b10 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {event}
                </Typography>
                <Typography>
                    <span dangerouslySetInnerHTML={{ __html: description }} />
                </Typography>
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
            <IntervalInstance time="Sept. 2025 - Ongoing" event="Harvard University" description="Master<br />Data Science" Icon={CVHarvardIcon} mentor='' link='' connectorVisibility={0b10} />
            <IntervalInstance time="Sept. 2021 - July 2025" event="Peking University" description="Bachelor<br />Information and Computing Science" Icon={CVPKUIcon} mentor='' link='' connectorVisibility={0b01} />
        </Timeline >
    );
}

export function ResearchTimeline() {
    return (
        <Timeline position="alternate">
            <IntervalInstance time="Feb. 2025 - June 2025" event="Peking University" description="Student Researcher" Icon={CVPKUIcon} mentor='Ming Zhang' link='https://pkudlib.github.io/' connectorVisibility={0b10}/>
            <IntervalInstance time="Apr. 2024 - Dec. 2024" event="Harvard University" description='Research Intern' Icon={CVHarvardIcon} mentor='Susan A. Murphy' link='https://people.seas.harvard.edu/~samurphy/' connectorVisibility={0b11} />
            <IntervalInstance time="June 2023 - Feb. 2024" event="University of Illinois Urbana-Champaign" description="Research Intern" Icon={CVUIUCIcon} mentor='Jiaxuan You' link='https://cs.stanford.edu/people/jiaxuan/' connectorVisibility={0b01}/>
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