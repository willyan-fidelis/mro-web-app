interface ConfigModel {
    video: VideoConfigModel,

}
interface VideoConfigModel {
    default_max_videos_per_page: number,
}

export class Config {
    private static config: ConfigModel = {
        video: {
            default_max_videos_per_page: 10
        }
    }
    static getConfig(): ConfigModel {
        return this.config;
    }
}