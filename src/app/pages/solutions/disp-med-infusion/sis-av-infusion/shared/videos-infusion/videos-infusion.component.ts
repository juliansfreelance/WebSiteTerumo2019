import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos-infusion',
  templateUrl: './videos-infusion.component.html',
  styleUrls: ['./videos-infusion.component.css']
})
export class VideosInfusionComponent implements OnInit {

  current_line = "";
  current_videos = [];
  other_lines = [];

  list_videos =
    [{
      id: "LF600",
      videos: [{
        titulo: "Encendido, apagado e inserción del set de administración dedicado",
        url: "https://web.archive.org/web/20181107220256im_/http://terumosmartpump.com/asd/1.mp4?_=1"
      },
      {
        titulo: "Programación mL-h",
        url: "https://web.archive.org/web/20181107235352im_/http://terumosmartpump.com/asd/4.mp4?_=2"
      },
      {
        titulo: "Instalación de bomba en el rack",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/7.mp4?_=3"
      },
      {
        titulo: "Purga rápida",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/8.mp4?_=4"
      },
      {
        titulo: "Bolo manual",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/9.mp4?_=5"
      },
      {
        titulo: "Bolo manual (Rápido)",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/10.mp4?_=6"
      },
      {
        titulo: "Bolo automático",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/11.mp4?_=7"
      },
      {
        titulo: "Silenciar alarmas",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/12.mp4?_=8"
      },
      {
        titulo: "Bloqueo de pantalla",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/13.mp4?_=9"
      },
      {
        titulo: "Modo de espera",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/14.mp4?_=10"
      },
      {
        titulo: "Niveles de oclusión",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/15.mp4?_=11"
      },
      {
        titulo: "Sensibilidad de detección de aire en línea",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/16.mp4?_=12"
      },
      {
        titulo: "Ajustes de volumen de sonidos",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/17.mp4?_=13"
      },
      {
        titulo: "Brillo de pantalla",
        url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/18.mp4?_=14"
      }
      ]
    },
    {
      id: 'LF700',
      videos: [
        {
          titulo: "Encendido, apagado e inserción del set de administración dedicado",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/1.mp4?_=1"
        }, {
          titulo: 'Programación mL-h',
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/4.mp4?_=2"
        },
        {
          titulo: "Instalación de bomba en el rack",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/7.mp4?_=3"
        }
      ]
    },
    {
      id: 'LF800',
      videos: [
        {
          titulo: "Encendido, apagado e inserción del set de administración dedicado",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/1.mp4?_=1"
        }, {
          titulo: 'Programación mL-h',
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/4.mp4?_=2"
        },
        {
          titulo: "Instalación de bomba en el rack",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/7.mp4?_=3"
        }
      ]
    },
    {
      id: 'SS700',
      videos: [
        {
          titulo: "Encendido, apagado e inserción del set de administración dedicado",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/1.mp4?_=1"
        }, {
          titulo: 'Programación mL-h',
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/4.mp4?_=2"
        },
        {
          titulo: "Instalación de bomba en el rack",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/7.mp4?_=3"
        }
      ]
    },
    {
      id: 'SS800',
      videos: [
        {
          titulo: "Encendido, apagado e inserción del set de administración dedicado",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/1.mp4?_=1"
        }, {
          titulo: 'Programación mL-h',
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/4.mp4?_=2"
        },
        {
          titulo: "Instalación de bomba en el rack",
          url: "https://web.archive.org/web/20180830021606im_/http://terumosmartpump.com/asd/7.mp4?_=3"
        }
      ]
    }];


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    this.current_line = (param) ? param : 'TODOS';
    this.changeVideos();
  }

  goTo(direction: string) {
    this.router.navigate([direction]);
    window.scroll(0, 700);
  }

  changeLine(line: string) {
    this.current_line = line;
    this.changeVideos();
  }
  changeVideos() {
    this.current_videos = this.list_videos.filter(res => res.id == this.current_line);
    this.other_lines = this.list_videos.filter(res => res.id != this.current_line); 
  }
}
