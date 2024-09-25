import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Snippet, Statistics } from '@core/interfaces/video-info';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-detailed-info-page',
  standalone: true,
  imports: [MatIconModule, DatePipe, ButtonComponent],
  templateUrl: './detailed-info-page.component.html',
  styleUrl: './detailed-info-page.component.scss',
})
export class DetailedInfoPageComponent implements OnDestroy {
  protected videoInfo: Snippet | null = null;
  protected statistics: Statistics | null = null;
  private videoId = this.route.snapshot.paramMap.get('id');
  private getVideoSubscription = this.videosService.getVideo(this.videoId ?? '').subscribe((resultingVideo) => {
    if (!resultingVideo) return;
    const { snippet, statistics } = resultingVideo.items[0];
    this.videoInfo = snippet;
    this.statistics = statistics;
  });

  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnDestroy(): void {
    this.getVideoSubscription.unsubscribe();
  }

  routeToHome() {
    this.router.navigate(['']);
  }
}
