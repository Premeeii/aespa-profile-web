import { Component, inject } from '@angular/core'; //ใช้แทนconstructor
import { ActivatedRoute } from '@angular/router'; //ดึงข้อมูลจากUrl
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
  currentId!: string;

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
  };
  savage: any = {
    aenergy: 'https://www.youtube.com/embed/pvPUUJsLwf4?si=gsFhEHAuubr7r-E6',
    savage: 'https://www.youtube.com/embed/WPdWvnAAurg?si=R3bzBvMhk_CpmbaP',
    illmakeyoucry: 'https://www.youtube.com/embed/NBunx0VMvos?si=2YDYKTWtJiKdv_ci',
    yeppiyeppi: 'https://www.youtube.com/embed/syYqQoE5Rbo?si=qi0L_OZsUunLxiPL',
    iconic: 'https://www.youtube.com/embed/gj-lvvYQdiU?si=vT89ewFMsSo1oNym',
    luciddream: 'https://www.youtube.com/embed/5DhAts7WcPk?si=54_6a7mQS-oYLAIl',
  };

  armageddon: any = {
    supernova: 'https://www.youtube.com/embed/phuiiNCxRMg?si=3MM1_awv5OD8vJx2',
    armageddon: 'https://www.youtube.com/embed/nFYwcndNuOY?si=0khvzRrR1POUZ1zJ',
    setthetone: 'https://www.youtube.com/embed/8_4Debx0YlQ?si=yWH3piC3gJ1h1aY2',
    mine: 'https://www.youtube.com/embed/SguQN1R1Ojs?si=a-Ml3p6YWGdDUgPT',
    licorice: 'https://www.youtube.com/embed/Xf4RqFYUpAU?si=IjNmZ8-GgeDknXci',
    bahama: 'https://www.youtube.com/embed/44NE7bVKAYc?si=ViCCww17mvobRMWu',
    longchat: 'https://www.youtube.com/embed/USr5C0QXMVw?si=5AkciCyBMlAfDBAk',
    prologue: 'https://www.youtube.com/embed/P8Zd56wknlk?si=beCgYRx-_0hqLQkx',
    livemylife: 'https://www.youtube.com/embed/YEA1ROHi0Eg?si=Tfup9iB9F_Zx5fhd',
    melody: 'https://www.youtube.com/embed/IdxYqQloU4w?si=bA7nksb4dqLK95e7',
  }

  girls: any = {
    girls: 'https://www.youtube.com/embed/dYRITmpFbJ4?si=zrCSjncEHfUtkI-F',
    illusion: 'https://www.youtube.com/embed/BpCvYeK5hcE?si=FDYMtEE273jqZB0_',
    lingo: 'https://www.youtube.com/embed/rxtdwssXyOs?si=arIiyRoqy3exrNoH',
    lifestooshort: 'https://www.youtube.com/embed/by9tc70t6xk?si=BwuK9Ev_Zj5PKSLJ',
    icu: 'https://www.youtube.com/embed/aGV_8CYCN3g?si=aRj-aB-Yk1OYe_MO',
    lifestooshorteng: 'https://www.youtube.com/embed/z2ZjutyxmjA?si=jadVA6BgokWTls_x',
    blackmamba: 'https://www.youtube.com/embed/ZeerrnuLi5E?si=CL5eL-IWMN7-3mb5',
    forver: 'https://www.youtube.com/embed/wog1R1d4zls?si=E7j8G_qN8l6zvV6Z',
    dreamcometure: 'https://www.youtube.com/embed/H69tJmsgd9I?si=w800A6Qozz713ZJT',
  }

  myworld: any = {
    welcometomyworld: 'https://www.youtube.com/embed/0xdB_vo4r2c?si=L2UnVLoetVkAFt33',
    spicy: 'https://www.youtube.com/embed/Os_heh8vPfs?si=LFKxFUq8hJ4fTs0T',
    saltyandsweet: 'https://www.youtube.com/embed/sORkB5o3b6o?si=X3WazWvO4AyK8aht',
    thisty: 'https://www.youtube.com/embed/i0RCcSBPjuU?si=J2weMrriFtyZwJ2H',
    imunhappy: 'https://www.youtube.com/embed/CC7OrEx5H4U?si=79ZS_n1LwqZeLwH8',
    tillwemeetagain: 'https://www.youtube.com/embed/cWsZCogtH98?si=WKLWhR540fLbsSjx',
  }

  drama: any = {
    drama: 'https://www.youtube.com/embed/D8VEhcPeSlc?si=YvEvGSeh2eRRNGjJ',
    trickortrick: 'https://www.youtube.com/embed/AvzoFZsShKg?si=7lSDsGZUs-L9UqRE',
    dontblink: 'https://www.youtube.com/embed/bzX5R8_GqEQ?si=8pnqDFURkIUlYG0A',
    hotairballoon: 'https://www.youtube.com/embed/Rbn56x39OLs?si=fAk5qj_GhWn84TJO',
    yolo: 'https://www.youtube.com/embed/SsW6Jkf4jQQ?si=wlL-1AeEN-_38Q8H',
    you: 'https://www.youtube.com/embed/ug6y1mQbr8s?si=IX9uE5SZa1dMdejX',
    betterthings: 'https://www.youtube.com/embed/gfk3QLU1x0E?si=-FmTaU78nZtAceL-',
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && this.videos[id]) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[id]);
    } else if (id && this.savage[id]) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.savage[id]);
    }
    else if (id && this.armageddon[id]){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.armageddon[id]);
    }
    else if(id && this.girls[id]){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.girls[id]);
    }
    else if(id && this.myworld[id]){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.myworld[id]);
    }
    else if(id && this.drama[id]){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.drama[id]);
    }
  }
}
