import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Snippet, Statistics } from '@core/interfaces/video-info';
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
  protected videoInfo: Snippet | null = null;
  protected statistics: Statistics | null = null;
  private videoId = this.route.snapshot.paramMap.get('id');

  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.videoId) return;
    const video = this.videosService.getVideo(this.videoId);
    if (!video) return;
    const { snippet, statistics } = {
      snippet: video.snippet,
      statistics: video.statistics,
    };
    this.videoInfo = snippet;
    this.statistics = statistics;
  }

  protected routeToHome() {
    this.router.navigate(['']);
  }
}
