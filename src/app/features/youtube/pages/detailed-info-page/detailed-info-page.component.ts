import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '@core/services/videos/videos.service';
import {
  VideoInfo,
  VideoStatistics,
} from '@features/youtube/interfaces/video-info';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-detailed-info-page',
  standalone: true,
  imports: [MatIconModule, DatePipe, ButtonComponent],
  templateUrl: './detailed-info-page.component.html',
  styleUrl: './detailed-info-page.component.scss',
})
export class DetailedInfoPageComponent implements OnInit {
  protected info: VideoInfo = {
    title: null,
    description: null,
    publishDate: null,
    image: null,
  };
  protected statistics: VideoStatistics = {
    views: null,
    likes: null,
    dislikes: null,
    commentCount: null,
  };
  private videoId = this.route.snapshot.paramMap.get('id');

  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.videoId) return;
    const { snippet, statistics } = {
      snippet: this.videosService.getVideo(this.videoId)!.snippet,
      statistics: this.videosService.getVideo(this.videoId)!.statistics,
    };
    if (snippet && statistics) {
      this.info = {
        title: snippet.title,
        description: snippet.description,
        publishDate: snippet.publishedAt,
        image: snippet.thumbnails.maxres.url,
      };
      this.statistics = {
        views: statistics.viewCount,
        likes: statistics.likeCount,
        dislikes: statistics.dislikeCount,
        commentCount: statistics.commentCount,
      };
    }
  }

  protected routeToHome() {
    this.router.navigate(['']);
  }
}
