import DummyPic1 from "../assets/temp/dummy-profile-1.png";
import DummyPic2 from "../assets/temp/dummy-profile-2.png";
import DummyPic3 from "../assets/temp/dummy-profile-3.png";
import DummyPic4 from "../assets/temp/dummy-profile-4.png";
import DummyPic5 from "../assets/temp/dummy-profile-5.png";
import Discount1 from "../assets/temp/Discounts1.png";
import Discount2 from "../assets/temp/Discounts2.png";
import Discount3 from "../assets/temp/Discounts3.png";
import Discount4 from "../assets/temp/Discounts4.png";
import GiftCard from "../assets/temp/GiftCard.png";
import Prizes1 from "../assets/temp/Prize1.png";
import Prizes2 from "../assets/temp/Prize2.png";
import Prizes3 from "../assets/temp/Prize3.png";
import Prizes4 from "../assets/temp/Prize4.png";
import Video1 from "../assets/temp/Video1.png";
import Video2 from "../assets/temp/Video2.png";
import Video3 from "../assets/temp/Video3.png";
import Video4 from "../assets/temp/Video4.png";
import Video5 from "../assets/temp/Video5.png";
import Video6 from "../assets/temp/Video6.png";
import Video7 from "../assets/temp/Video7.png";
import Video8 from "../assets/temp/Video8.png";
import DummyProfile from "../assets/temp/profile-pic.jpg";

export class FakeData {

    static leaderboards = [
        {
            id: 1,
            name: 'Jerry Adam',
            category: 'platinum',
            points: 53453,
            wonPoints: 500,
            profile: DummyPic1
        },
        {
            id: 2,
            name: 'Jackie Leannon',
            category: 'gold',
            points: 49453,
            wonPoints: 500,
            profile: DummyPic2
        },
        {
            id: 3,
            name: 'Emely Glover',
            category: 'gold',
            points: 20453,
            wonPoints: 500,
            profile: DummyPic3
        },
        {
            id: 4,
            name: 'Mary Bergnaum',
            category: 'silver',
            points: 11453,
            wonPoints: 500,
            profile: DummyPic4
        },
        {
            id: 5,
            name: 'Gerry Schaden',
            category: 'bronze',
            points: 2453,
            wonPoints: 500,
            profile: DummyPic5
        },
    ];

    static rewards = {
        balance: 5700,
        discounts: [
            {
                id: 1,
                label: '**10% off** home & kitchen accessories',
                points: 4000,
                itemsLeft: 12,
                image: Discount1
            },
            {
                id: 2,
                label: '**15% off** premium beauty products',
                points: 4000,
                itemsLeft: 12,
                image: Discount2
            },
            {
                id: 3,
                label: '**20% off** electronics',
                points: 4000,
                itemsLeft: 12,
                image: Discount3
            },
            {
                id: 4,
                label: '**30% off** fashion brands',
                points: 4000,
                itemsLeft: 12,
                image: Discount4
            }
        ],
        'gift-cards': [
            {
                id: 5,
                label: '$20 Amazon Gift Card',
                points: 20000,
                itemsLeft: 12,
                image: GiftCard
            },
            {
                id: 6,
                label: '$50 Amazon Gift Card',
                points: 30000,
                itemsLeft: 12,
                image: GiftCard
            },
            {
                id: 7,
                label: '$75 Amazon Gift Card',
                points: 50000,
                itemsLeft: 12,
                image: GiftCard
            },
            {
                id: 8,
                label: '$100 Amazon Gift Card',
                points: 70000,
                itemsLeft: 12,
                image: GiftCard
            },
        ],
        prizes: [
            {
                id: 9,
                label: 'Bicycle',
                points: 40000,
                itemsLeft: 12,
                image: Prizes1
            },
            {
                id: 10,
                label: 'Refrigerator',
                points: 70000,
                itemsLeft: 12,
                image: Prizes2
            },
            {
                id: 11,
                label: 'Drone Camera',
                points: 100000,
                itemsLeft: 12,
                image: Prizes3
            },
            {
                id: 12,
                label: 'Dell Laptop',
                points: 150000,
                itemsLeft: 12,
                image: Prizes4
            },
        ]
    };

    static videos = [
        {
            id: 1,
            categoryId: 'opinions',
            categoryLabel: 'Opinions',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'gold',
            thumbnail: Video1,
            creatorName: 'Madison Jnr',
            creatorProfile: DummyPic1
        },
        {
            id: 2,
            categoryId: 'arts-and-craft',
            categoryLabel: 'Arts and Craft',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'gold',
            thumbnail: Video2,
            creatorName: 'Dushawn Javic',
            creatorProfile: DummyPic2
        },
        {
            id: 3,
            categoryId: 'auto-and-travel',
            categoryLabel: 'Auto & Travel',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'platinum',
            thumbnail: Video3,
            creatorName: 'Europeana',
            creatorProfile: DummyPic3
        },
        {
            id: 4,
            categoryId: 'beauty-and-personal-care',
            categoryLabel: 'Beauty & Personal Care',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'gold',
            thumbnail: Video4,
            creatorName: 'Alan Scales',
            creatorProfile: DummyPic4
        },
        {
            id: 5,
            categoryId: 'home-and-kitchen',
            categoryLabel: 'Home & Kitchen',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'gold',
            thumbnail: Video5,
            creatorName: 'Ahmed Odeh',
            creatorProfile: DummyPic5
        },
        {
            id: 6,
            categoryId: 'arts-and-craft',
            categoryLabel: 'Arts and Craft',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'gold',
            thumbnail: Video6,
            creatorName: 'Madison Jnr',
            creatorProfile: DummyPic3
        },
        {
            id: 7,
            categoryId: 'high-end-tech',
            categoryLabel: 'High-end Tech',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'gold',
            thumbnail: Video7,
            creatorName: 'Houcine Ncib',
            creatorProfile: DummyPic2
        },
        {
            id: 8,
            categoryId: 'outdoors-and-fitness',
            categoryLabel: 'Outdoors & Fitness',
            title: 'Doing the double flip on my skaterboard',
            uploadedAt: '2023-08-16T10:39:21.456Z',
            likes: 12000,
            views: 1200000,
            type: 'gold',
            thumbnail: Video8,
            creatorName: 'MAteo',
            creatorProfile: DummyPic1
        }
    ];

    static profile = {
        image: DummyProfile,
        name: 'Madison Jnr',
        username: 'madisonjnr44',
        type: 'gold',
        points: 5700,
        submissions: 31,
        followers: 2500,
        videos: this.videos
    }
}