import { Component, inject } from '@angular/core'; //ใช้แทนconstructor
import { ActivatedRoute } from '@angular/router';  //ดึงข้อมูลจากUrl
import { DomSanitizer } from '@angular/platform-browser'; //ตรวจสอบความปลอดภัยของUrl

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.html',
  styleUrl: './single.css',
})
export class Single {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  videoUrl: any;

  videos: any = {
    blackmamba: 'https://www.youtube.com/embed/ZeerrnuLi5E?si=-4jq5bAcMMroZNiW',
    forever: 'https://www.youtube.com/embed/wog1R1d4zls?si=GWQc1sFwqVaAN5Qb',
    nextlevel: 'https://www.youtube.com/embed/4TWR90KJl84?si=9_78fhKRNyAGhlz6',
    illusion: 'https://www.youtube.com/embed/BpCvYeK5hcE?si=xYFG785OAQ6zgcEh',
    lifetooshort: 'https://www.youtube.com/embed/z2ZjutyxmjA?si=HlRUD_U02VKM1xML',
    beutifulchristmas: 'https://www.youtube.com/embed/iTgcp1oDk2M?si=uHtXD19XGPA3WuI2',
    holdontight: 'https://www.youtube.com/embed/1XZRhrt1Tkg?si=5xVo93pnBZLGwkRv',
    welcometomyworld: 'https://www.youtube.com/embed/0xdB_vo4r2c?si=BE47O8YRTKSGA9Ef',
    betterthing: 'https://www.youtube.com/embed/gfk3QLU1x0E?si=4ScraGJ5jKytgl2E',
    zoomzoom: 'https://www.youtube.com/embed/vguXQ6sAisM?si=CoDsbNpyih8_TjC6',
    jinglebellrock: 'https://www.youtube.com/embed/HJYetAS7cVs?si=YHzECMDf-B6RfMwT',
    regretofthetime: 'https://www.youtube.com/embed/xjBY3MLdvVQ?si=a8ivDMw1DwMFzkNG',
    dietrying: 'https://www.youtube.com/embed/u197XXtcdGg?si=McuZHBj7U_zOixs6',
    supernova: 'https://www.youtube.com/embed/phuiiNCxRMg?si=qKGnRY2txX5m20lT',
    whiplash: 'https://www.youtube.com/embed/jWQx2f-CErU?si=vLhrHeo3wGB2dmTY',
    dirtywork: 'https://www.youtube.com/embed/M2WTUoy4y6E?si=AiOZZqByTXwvKvpB',
    darkarts: 'https://www.youtube.com/embed/Mk-lWh31BK4?si=-Tw_cUp4M8qEDJFu',
    richman: 'https://www.youtube.com/embed/5oQVTnq-UKk?si=2xhCVCyDdHm09Gv_',
  }

ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');

      if(id && this.videos[id]){
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[id])
      }
    }

}
