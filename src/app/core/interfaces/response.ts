interface Response {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: [
    {
      kind: string,
      etag: string,
      id: string,
      snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
          default: ThumbnailVariant,
          medium: ThumbnailVariant,
          high: ThumbnailVariant,
          standard: ThumbnailVariant,
          maxres: ThumbnailVariant
        },
        channelTitle: string,
        tags: string[],
        categoryId: string,
        liveBroadcastContent: string,
        localized: {
          title: string,
          description: string,
        },
        defaultAudioLanguage: string
      },
      statistics: {
        viewCount: string,
        likeCount: string,
        dislikeCount: string,
        favoriteCount: string,
        commentCount: string
      }
    }
  ]
}

interface ThumbnailVariant {
  url: string,
  width: number,
  height: number
}