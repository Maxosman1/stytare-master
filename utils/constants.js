import OpinionsIcon from "../assets/icons/opinions-icon.svg";
import TechAndGadgetsIcon from "../assets/icons/tech-and-gadgets-icon.svg";
import HomeAndKitchenIcon from "../assets/icons/home-and-kitchen-icon.svg";
import BeautyAndHealthIcon from "../assets/icons/beauty-and-health-icon.svg";
import AutoAndTravelIcon from "../assets/icons/auto-and-travel-icon.svg";
import BooksAndMediaIcon from "../assets/icons/books-and-media-icon.svg";
import FashionIcon from "../assets/icons/fashion-icon.svg";
import SportsAndOutdoorsIcon from "../assets/icons/sports-and-outdoors-icon.svg";
import ToysAndGames from "../assets/icons/toys-and-games-icon.svg";
import LuxuryItemsIcon from "../assets/icons/luxury-items-icon.svg";
import HighEndTechIcon from "../assets/icons/high-end-tech-icon.svg";
import FineArtIcon from "../assets/icons/fine-art-icon.svg";
import PremiumArtwork from "../assets/images/premium-artwork.png";

export class Constant {

    static contests = {
        title: 'Contests',
        categories: [
            {
                id: 'bronze-category-contests',
                label: 'Bronze (50-100pts)',
                contests: [
                    {
                        id: 'opinions',
                        label: 'Opinions',
                        icon: OpinionsIcon,
                        description: 'Broadcast your thoughts, engage in debate.'
                    },
                    {
                        id: 'tech-and-gadgets',
                        label: 'Tech & Gadgets',
                        icon: TechAndGadgetsIcon,
                        description: 'Explore, review, discuss latest technology.'
                    },
                    {
                        id: 'home-and-kitchen',
                        label: 'Home & Kitchen',
                        icon: HomeAndKitchenIcon,
                        description: 'Share insights on domestic essentials.'
                    }
                ]
            },
            {
                id: 'silver-category-contests',
                label: 'Silver (100-200pts)',
                contests: [
                    {
                        id: 'beauty-and-health',
                        label: 'Beauty & Health',
                        icon: BeautyAndHealthIcon,
                        description: 'Experience wellness with superior products.'
                    },
                    {
                        id: 'auto-and-travel',
                        label: 'Auto & Travel',
                        icon: AutoAndTravelIcon,
                        description: 'Navigate the world, one review at a time.'
                    },
                    {
                        id: 'books-and-media',
                        label: 'Books & Media',
                        icon: BooksAndMediaIcon,
                        description: 'Unveil literary gems and entertainment.'
                    }
                ]
            },
            {
                id: 'gold-category-contests',
                label: 'Gold (200-500pts)',
                contests: [
                    {
                        id: 'fashion',
                        label: 'Fashion',
                        icon: FashionIcon,
                        description: 'Stay trendy with stylish updates.'
                    },
                    {
                        id: 'sports-and-outdoors',
                        label: 'Sports & Outdoors',
                        icon: SportsAndOutdoorsIcon,
                        description: 'Join in athletic gear showdowns.'
                    },
                    {
                        id: 'toys-and-games',
                        label: 'Toys & Games',
                        icon: ToysAndGames,
                        description: 'Share the fun with toy and game showdowns.'
                    }
                ]
            },
            {
                id: 'platinum-category-contests',
                label: 'Platinum (500-1000pts)',
                contests: [
                    {
                        id: 'luxury-items',
                        label: 'Luxury Items',
                        icon: LuxuryItemsIcon,
                        description: 'Review and rate the finest luxuries.'
                    },
                    {
                        id: 'high-end-tech',
                        label: 'High-End Tech',
                        icon: HighEndTechIcon,
                        description: 'Experience technological innovation.'
                    },
                    {
                        id: 'fine-art',
                        label: 'Fine Art',
                        icon: FineArtIcon,
                        description: 'Appraise and discuss exquisite art pieces.'
                    }
                ]
            },
        ]
    };

    static joinContest = {
        requirement: 'To join contest you will have to upload a video broadcasting your thoughts, engaging in the debate.',
        rules: [
            'Content Guidelines: The video must adhere to the specified theme and guidelines. Inappropriate or offensive content will be disqualified.',
            'Video Length: The video should not exceed the maximum time limit specified for the contest.',
            'Original Work: The video must be your original creation, and you must have full rights to all elements featured in the video.'
        ],
        uploadVideo: 'Enter video link or browse your device to upload your video',
        agreementNotice: "I agree to the Styrate's Terms and Conditions"
    };

    static subscription = {
        title: 'Go Premium',
        description : 'Get more with Styrate Premium. You can cancel anytime',
        image: PremiumArtwork,
        subscriptionComparison: [
            {
                label: 'Complete in showdown',
                levels: { basic: true, premium: true, enterprise: true }
            },
            {
                label: 'Earn points',
                levels: { basic: true, premium: true, enterprise: true }
            },
            {
                label: 'Basic Showdowns',
                levels: { basic: true, premium: true, enterprise: true }
            },
            {
                label: 'Points to Prizes',
                levels: { basic: false, premium: true, enterprise: true }
            },
            {
                label: 'Exclusive showdown',
                levels: { basic: false, premium: true, enterprise: true }
            },
            {
                label: 'Ad-Free experience',
                levels: { basic: false, premium: true, enterprise: true }
            },
            {
                label: 'Early Access',
                levels: { basic: false, premium: true, enterprise: true }
            },
            {
                label: 'Create Showdowns',
                levels: { basic: false, premium: false, enterprise: true }
            },
            {
                label: 'Detailed Analytics',
                levels: { basic: false, premium: false, enterprise: true }
            },
            {
                label: 'Promote Showdowns',
                levels: { basic: false, premium: false, enterprise: true }
            },
            {
                label: 'Customer Support',
                levels: { basic: false, premium: false, enterprise: true }
            }
        ],
        button: {
            label: 'Try Styrate Premium',
            id: 'try-styrate-premium'
        }
    };

    static subscriptionPlan = {
        title: 'Choose a plan',
        description: 'Get more with Styrate Premium. You can cancel anytime',
        notice: 'Subscribers are granted access to specified content as outlined in their chosen subscription plan. Unauthorized distribution, reproduction, or sharing of content is strictly prohibited and may result in the termination of your subscription.',
        freeTrial: '7 days',
        tiers: [
            { tier: 'premium', label: 'Premium', perMonth: '$9.99' },
            { tier: 'enterprise', label: 'Enterprise', perMonth: '$49.99' }
        ],
        button: {
            label: 'Subscribe Now',
            id: 'subscribe-now'
        }
    };

    static rewardTypes = [
        {
            id: 'discounts',
            label: 'Discounts',
            description: 'Get discounts on your next purchase'
        },
        {
            id: 'gift-cards',
            label: 'Gift Cards',
            description: 'Redeem amazing gift card offers'
        },
        {
            id: 'prizes',
            label: 'Prizes',
            description: 'Redeem amazing prizes!'
        }
    ];

    static videoTypes = [
        {
            id: 'bronze',
            label: 'Bronze'
        },
        {
            id: 'silver',
            label: 'Silver'
        },
        {
            id: 'gold',
            label: 'Gold'
        },
        {
            id: 'platinum',
            label: 'Platinum'
        }
    ];
    
};