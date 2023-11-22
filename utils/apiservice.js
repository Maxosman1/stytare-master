import { FakeData } from "./fakedata";
import DummyProfile from "../assets/temp/profile-pic.jpg";
import { Constant } from "./constants";

export class APIService {

    static getLeaderboards() {
        return FakeData.leaderboards;
    }

    static getNavigatorProfilePic() {
        return DummyProfile;
    }

    static getRewards() {
        return FakeData.rewards;
    }

    static getVideos() {
        return FakeData.videos;
    }

    static getVideos(type) {
        if (!type || type === 'all') return FakeData.videos;
        else return FakeData.videos.filter(video => video.type === type);
    }

    static getProfileData() {
        return FakeData.profile;
    }

    static getContestDetails(id) {
        const description = Constant.contests.categories.flatMap(category => category.contests).find(contest => contest.id === id).description;
        return {
            description,
            price: 100,
            deadline: '2023-09-26',
            topVideos: FakeData.videos 
        }
    }

}