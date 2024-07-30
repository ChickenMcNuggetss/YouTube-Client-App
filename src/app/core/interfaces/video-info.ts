export interface VideoResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: VideoInfo[]
}

export interface VideoInfo {
  kind: string;
  etag: string;
  id: {
    kind: string,
    videoId: string,
  };
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: ThumbnailVariant;
    medium: ThumbnailVariant;
    high: ThumbnailVariant;
    standard: ThumbnailVariant;
    maxres: ThumbnailVariant;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  defaultLanguage?: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ThumbnailVariant {
  url: string;
  width: number;
  height: number;
}
