export declare enum LocationTypeEnum {
    INDOOR = "INDOOR",
    OUTDOOR = "OUTDOOR",
    HOME = "HOME",
    TRAVELLING = "TRAVELLING"
}
export declare class CreateTimelineDto {
    from: Date;
    to: Date;
    detail: string;
    locationType: LocationTypeEnum;
    locationName: string;
}
