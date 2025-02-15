export const ClassNames = (classes: string[]): string => classes.join(" ");
// const { publicRuntimeConfig } = getConfig();
// export const getMediaUrl = (
//   mediaId: number,
//   version: number,
//   size: ImageMediaSizeEnum
// ) => {
//   const url = `${publicRuntimeConfig.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_MEDIA_URL}${mediaId}/${version}/${size}`;
//   return url;
// };
export enum ImageMediaSizeEnum {
  LargeRoomImage,
  MediumRoomImage,
  SmallRoomImage,
  ProfileImage,
  LargeProfileImage,
  LargeHomePageImage,
  SmallHomePageImage,
  LargeBanerOfHomePageImage,
  SmallBanerOfHomePageImage,
  Large,
  Medium,
  Small,
  Slider,
}
