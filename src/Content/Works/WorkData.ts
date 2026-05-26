import rewardDesignProcessImage from '../../Images/Process.png';
import rdbBenchOverviewImage from '../../Images/OverviewRDB.png';
import conformalAdaptiveHashingOverviewImage from '../../Images/conformalAdaptiveHashingOverview.png';
import alphaEvalOverviewImage from '../../Images/alphaEvalOverview.png';
import exploratoryResearchPlaceholderImage from '../../Images/algorithm.jpeg';

export type WorkKind = 'Publication' | 'Preprint' | 'Workshop' | 'Project';

export interface WorkEntry {
    author_before: string;
    author_me: string;
    author_after: string;
    description: string;
    image: string;
    imageWidth: number;
    imageLabel: string;
    title: string;
    published_where: string;
    ref_address: string;
    kind: WorkKind;
}

export interface WorkTopic {
    title: string;
    description: string;
    works: WorkEntry[];
}

export const workTopics: WorkTopic[] = [
    {
        title: 'Decision Making and Reinforcement Learning',
        description: 'On decision-making and applied reinforcement learning.',
        works: [
            {
                title: 'Mediator-Based Reward Design in Online Contextual Bandit',
                author_before: '',
                author_me: 'Lutong Zou',
                author_after: ', Ziping Xu, Daiqi Gao, Susan Murphy',
                description:
                    'This paper proposes a framework that constructs surrogate rewards based on mediators between actions and rewards, informed by expert-provided causal directed acyclic graphs (DAGs).',
                image: rewardDesignProcessImage,
                imageWidth: 500,
                imageLabel: 'Mediator-based reward design workflow',
                published_where: 'RLDM 2025 Spotlight & ICML 2026 Workshop SD4H',
                ref_address: 'https://github.com/LugarZou/LugarZou.github.io/blob/master/src/Images/RLDMCamera_ready.pdf?raw=true',
                kind: 'Workshop',
            },
        ],
    },
    {
        title: 'Machine Learning Systems and Methods',
        description: 'On machine learning systems and methods.',
        works: [
            {
                title: 'Conformalized Hierarchical Calibration for Uncertainty-Aware Adaptive Hashing',
                author_before: 'Junyu Luo, Jinsheng Huang, Yang Xu, ',
                author_me: 'Lutong Zou',
                author_after: ', Xiao Luo, Bohan Wu, Yifan Wang, Wei Ju, Ming Zhang',
                description:
                    'We propose an uncertainty-aware adaptive hashing approach that addresses these challenges through a hierarchical conformal calibration framework.',
                image: conformalAdaptiveHashingOverviewImage,
                imageWidth: 700,
                imageLabel: 'Conformalized hierarchical calibration framework for uncertainty-aware adaptive hashing',
                published_where: 'ICLR 2026',
                ref_address: 'https://openreview.net/forum?id=fBmRLVAw4T',
                kind: 'Publication',
            },
            {
                title: 'RDBench: ML Benchmark for Relational Databases',
                author_before: 'Zizhao Zhang*, Yi Yang*, ',
                author_me: 'Lutong Zou*',
                author_after: ', He Wen*, Tao Feng, Jiaxuan You',
                description:
                    'We introduced ML Benchmark For Relational Databases (RDBench), aiming to promote reproducible ML research on RDBs that include multiple tables.',
                image: rdbBenchOverviewImage,
                imageWidth: 800,
                imageLabel: 'RDBench overview',
                published_where: 'arXiv',
                ref_address: 'https://arxiv.org/pdf/2310.16837v1',
                kind: 'Preprint',
            },

        ],
    },
    {
        title: 'Quantitative Trading',
        description: 'Trading strategies, market prediction, and financial time series.',
        works: [
            {
                title: 'Alphaeval: A comprehensive and efficient evaluation framework for formula alpha mining',
                author_before: 'Hongjun Ding, Binqi Chen, Jinsheng Huang, Taian Guo, Zhengyang Mao, Guoyi Shao, ',
                author_me: 'Lutong Zou',
                author_after: ', Luchen Liu, Ming Zhang',
                description:
                    'We propose AlphaEval, a unified, parallelizable, and backtest-free evaluation framework for automated alpha mining models. AlphaEval assesses the overall quality of generated alphas along five complementary dimensions: predictive power, stability, robustness to market perturbations, financial logic, and diversity.',
                image: alphaEvalOverviewImage,
                imageWidth: 600,
                imageLabel: 'AlphaEval framework for evaluating formula alpha mining models',
                published_where: 'KDD 2026',
                ref_address: 'https://arxiv.org/abs/2508.13174',
                kind: 'Publication',
            },
        ],
    },
    {
        title: 'Miscellaneous',
        description: 'Early explorations, side collaborations, and partial-contribution work that does not yet belong to a sustained research line.',
        works: [
            // {
            //     title: 'Exploratory Work and Partial Collaborations',
            //     author_before: '',
            //     author_me: 'Lutong Zou',
            //     author_after: '',
            //     description:
            //         'A place for early-stage work, one-off experiments, or papers where I joined only briefly and contributed as a later author. This section is meant to stay flexible as new small projects appear.',
            //     image: exploratoryResearchPlaceholderImage,
            //     imageWidth: 420,
            //     imageLabel: 'Exploratory research placeholder',
            //     published_where: 'Project Notes',
            //     ref_address: 'https://scholar.google.com/citations?user=rWwSkGoAAAAJ&hl=en',
            //     kind: 'Project',
            // },
        ],
    },
];
