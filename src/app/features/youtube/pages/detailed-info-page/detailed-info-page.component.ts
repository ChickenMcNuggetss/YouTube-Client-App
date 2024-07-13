import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '@core/services/videos/videos.service';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-detailed-info-page',
  standalone: true,
  imports: [MatIconModule, DatePipe, ButtonComponent],
  templateUrl: './detailed-info-page.component.html',
  styleUrl: './detailed-info-page.component.scss',
})
export class DetailedInfoPageComponent implements OnInit {
  protected info = {
    title: '',
    description: '',
    publishDate: '',
    image: '',
    views: '',
    likes: '',
    dislikes: '',
    commentCount: '',
  };
  videoId = this.route.snapshot.paramMap.get('id');

  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.videoId) return;
    const selectedVideo = this.videosService.getVideo(this.videoId);
    if (selectedVideo) {
      this.info = {
        title: selectedVideo.snippet.title,
        description: selectedVideo.snippet.description,
        publishDate: selectedVideo.snippet.publishedAt,
        image: selectedVideo.snippet.thumbnails.maxres.url,
        views: selectedVideo.statistics.viewCount,
        likes: selectedVideo.statistics.likeCount,
        dislikes: selectedVideo.statistics.dislikeCount,
        commentCount: selectedVideo.statistics.commentCount,
      };
    }
  }

  routeToHome() {
    this.router.navigate(['']);
  }
}
