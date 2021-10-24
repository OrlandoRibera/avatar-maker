import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  Clothes,
  FacialHair,
  Top,
  Eyes,
  Mouth,
  Skin,
  Accessories,
  Eyebrow,
  Face,
  Graphic,
  FacialHairColor,
  ClothesColor,
  HatColor,
  HairColor,
  AvatarOptions,
} from '../../../../../../projects/avatar/src/public-api';

import { saveAs } from 'file-saver';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FacadeService } from '../../facade/facade.service';
import { ToastrService } from 'ngx-toastr';
import {
  faRandom,
  faArrowRight,
  faPallet,
  faCopy,
  faDownload,
  faCode,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'avatar-mkr',
  templateUrl: './avatar-mkr.component.html',
  styleUrls: ['./avatar-mkr.component.scss'],
})
export class AvatarMkrComponent implements OnInit {
  avatarForm: FormGroup;
  options: AvatarOptions;
  canvasRef: HTMLCanvasElement;
  angularCode: string;
  showImage = false;
  showSvg = false;
  svgData: string;
  topsEnum = Top;
  facialHairEnum = FacialHair;
  clothesEnum = Clothes;

  accessories: Array<any>;
  clothColor: Array<any>;
  clothe: Array<any>;
  eyebrow: Array<any>;
  eyes: Array<any>;
  face: Array<any>;
  facialHair: Array<any>;
  facialHairColor: Array<any>;
  graphic: Array<any>;
  hairColor: Array<any>;
  hatColor: Array<any>;
  mouth: Array<any>;
  skin: Array<any>;
  tops: Array<any>;
  avatarStyle: Array<any>;

  // icons
  faRandom = faRandom;
  faArrowRight = faArrowRight;
  faPallet = faPallet;
  faCopy = faCopy;
  faDownload = faDownload;
  faCode = faCode;
  faUpload = faUpload;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private facade: FacadeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.options = new AvatarOptions();

    this.avatarForm = new FormGroup({
      top: new FormControl(this.options.top),
      accessories: new FormControl(this.options.accessories),
      hairColor: new FormControl(this.options.hairColor),
      hatColor: new FormControl(this.options.hatColor),
      facialHair: new FormControl(this.options.facialHair),
      facialHairColor: new FormControl(this.options.facialHairColor),
      clothes: new FormControl(this.options.clothes),
      clothColor: new FormControl(this.options.clothColor),
      eyes: new FormControl(this.options.eyes),
      eyebrow: new FormControl(this.options.eyebrow),
      mouth: new FormControl(this.options.mouth),
      skin: new FormControl(this.options.skin),
      face: new FormControl(this.options.face),
      graphic: new FormControl(this.options.graphic),
    });

    this.avatarForm.valueChanges.subscribe((value) => {
      this.options = value;

      setTimeout(() => {
        return this.toggleSvg(false);
      }, 0);
      this.showColourFabric();
      this.router.navigate([], {
        queryParams: {
          avatarStyle: this.options.style,
          top: this.options.top,
          accessories: this.options.accessories,
          hairColor: this.options.hairColor,
          hatColor: this.options.hatColor,
          facialHair: this.options.facialHair,
          facialHairColor: this.options.facialHairColor,
          clothes: this.options.clothes,
          clothColor: this.options.clothColor,
          eyes: this.options.eyes,
          eyebrow: this.options.eyebrow,
          mouth: this.options.mouth,
          skin: this.options.skin,
          face: this.options.face,
          graphic: this.options.graphic,
        },
      });
    });

    this.tops = this.getEnumTupple(Top);
    this.facialHair = this.getEnumTupple(FacialHair);
    this.clothe = this.getEnumTupple(Clothes);
    this.eyes = this.getEnumTupple(Eyes);
    this.eyebrow = this.getEnumTupple(Eyebrow);
    this.mouth = this.getEnumTupple(Mouth);
    this.skin = this.getEnumTupple(Skin);
    this.accessories = this.getEnumTupple(Accessories);
    this.clothColor = this.getEnumTupple(ClothesColor);
    this.face = this.getEnumTupple(Face);
    this.facialHairColor = this.getEnumTupple(FacialHairColor);
    this.graphic = this.getEnumTupple(Graphic);
    this.hatColor = this.getEnumTupple(HatColor);
    this.hairColor = this.getEnumTupple(HairColor);

    this.activatedRoute.queryParams
      .pipe(filter((a) => !!a))
      .subscribe((data) => {
        if (data['top']) {
          this.options.top = data['top'];
          this.options.accessories = data['accessories'];
          this.options.hairColor = data['hairColor'];
          this.options.hatColor = data['hatColor'];
          this.options.facialHair = data['facialHair'];
          this.options.facialHairColor = data['facialHairColor'];
          this.options.clothes = data['clothes'];
          this.options.clothColor = data['clothColor'];
          this.options.eyes = data['eyes'];
          this.options.eyebrow = data['eyebrow'];
          this.options.mouth = data['mouth'];
          this.options.skin = data['skin'];
          this.options.face = data['face'];
          this.options.graphic = data['graphic'];

          this.avatarForm.patchValue({
            top: data['top'],
            accessories: data['accessories'],
            hairColor: data['hairColor'],
            hatColor: data['hatColor'],
            facialHair: data['facialHair'],
            facialHairColor: data['facialHairColor'],
            clothes: data['clothes'],
            clothColor: data['clothColor'],
            eyes: data['eyes'],
            eyebrow: data['eyebrow'],
            mouth: data['mouth'],
            skin: data['skin'],
            face: data['face'],
            graphic: data['graphic'],
          });
        }
      });
  }

  getEnumTupple(enumRef: any): Array<any> {
    return Object.keys(enumRef).map((key) => {
      return enumRef[key];
    });
  }

  getRandom() {
    this.options = new AvatarOptions();

    this.options.getRandom();
    this.avatarForm.patchValue({
      top: this.options.top,
      accessories: this.options.accessories,
      hairColor: this.options.hairColor,
      hatColor: this.options.hatColor,
      facialHair: this.options.facialHair,
      facialHairColor: this.options.facialHairColor,
      clothes: this.options.clothes,
      clothColor: this.options.clothColor,
      eyes: this.options.eyes,
      eyebrow: this.options.eyebrow,
      mouth: this.options.mouth,
      skin: this.options.skin,
      face: this.options.face,
      graphic: this.options.graphic,
    });
    this.router.navigate([], {
      queryParams: {
        avatarStyle: this.options.style,
        top: this.options.top,
        accessories: this.options.accessories,
        hairColor: this.options.hairColor,
        hatColor: this.options.hatColor,
        facialHair: this.options.facialHair,
        facialHairColor: this.options.facialHairColor,
        clothes: this.options.clothes,
        clothColor: this.options.clothColor,
        eyes: this.options.eyes,
        eyebrow: this.options.eyebrow,
        mouth: this.options.mouth,
        skin: this.options.skin,
        face: this.options.face,
        graphic: this.options.graphic,
      },
    });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
    this.showSvg = false;
    this.toggleSvg(false);
  }

  toggleSvg(bool: boolean): void {
    if (bool) {
      this.showSvg = !this.showSvg;
      this.showImage = false;
    }
    const svgNode = document.getElementById('svgid');
    this.svgData = svgNode.innerHTML;
  }

  downloadSvg(): void {
    const svgNode = document.getElementById('svgid');
    const data = svgNode.innerHTML;
    const svg = new Blob([data], { type: 'image/svg+xml' });
    saveAs(svg, 'avatar.svg');
  }

  public onDownloadPNG = (): void => {
    const svgNode = document.getElementById('svgid');
    const canvas = document.getElementById('canvasRef') as HTMLCanvasElement;
    canvas.width = 400;
    canvas.height = 408;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const anyWindow = window as any;
    const DOMURL = anyWindow.URL || anyWindow.webkitURL || window;
    const data = svgNode.innerHTML;
    const svg = new Blob([data], { type: 'image/svg+xml' });
    const img = new Image(canvas.width, canvas.height);
    const url = DOMURL.createObjectURL(svg);
    img.onload = () => {
      ctx.save();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      DOMURL.revokeObjectURL(url);
      canvas.toBlob((imageBlob) => {
        const timespan = new Date().getTime();
        this.triggerDownload(imageBlob, `avatar${timespan}.png`);
      });
    };
    img.src = url;
  };

  private triggerDownload(imageBlob: Blob, fileName: string) {
    saveAs(imageBlob, fileName);
  }

  showColourFabric(): boolean {
    if (
      this.options.clothes === this.clothesEnum.BLAZER_SHIRT ||
      this.options.clothes === this.clothesEnum.BLAZER_SWEATER
    ) {
      return false;
    }
    return true;
  }
  showHatColour(): boolean {
    if (
      this.options.top === this.topsEnum.HIJAB ||
      this.options.top === this.topsEnum.TURBAN ||
      this.options.top === this.topsEnum.WINTER_HAT1 ||
      this.options.top === this.topsEnum.WINTER_HAT2 ||
      this.options.top === this.topsEnum.WINTER_HAT3 ||
      this.options.top === this.topsEnum.WINTER_HAT4
    ) {
      return true;
    } else return false;
  }
  showHairColour(): boolean {
    if (
      this.options.top === this.topsEnum.LONGHAIR_BIGHAIR ||
      this.options.top === this.topsEnum.LONGHAIR_BOB ||
      this.options.top === this.topsEnum.LONGHAIR_BUN ||
      this.options.top === this.topsEnum.LONGHAIR_CURLY ||
      this.options.top === this.topsEnum.LONGHAIR_CURVY ||
      this.options.top === this.topsEnum.LONGHAIR_DREADS ||
      this.options.top === this.topsEnum.LONGHAIR_FRO ||
      this.options.top === this.topsEnum.LONGHAIR_FROBAND ||
      this.options.top === this.topsEnum.LONGHAIR_NOTTOOLONG ||
      this.options.top === this.topsEnum.LONGHAIR_MIAWALLACE ||
      this.options.top === this.topsEnum.LONGHAIR_STRAIGHT ||
      this.options.top === this.topsEnum.LONGHAIR_STRAIGHT2 ||
      this.options.top === this.topsEnum.LONGHAIR_STRAIGHTSTRAND ||
      this.options.top === this.topsEnum.SHORTHAIR_DREADS01 ||
      this.options.top === this.topsEnum.SHORTHAIR_DREADS02 ||
      this.options.top === this.topsEnum.SHORTHAIR_FRIZZLE ||
      this.options.top === this.topsEnum.SHORTHAIR_SHAGGYMULLET ||
      this.options.top === this.topsEnum.SHORTHAIR_SHORTCURLY ||
      this.options.top === this.topsEnum.SHORTHAIR_SHORTFLAT ||
      this.options.top === this.topsEnum.SHORTHAIR_SHORTROUND ||
      this.options.top === this.topsEnum.SHORTHAIR_SHORTWAVED ||
      this.options.top === this.topsEnum.SHORTHAIR_SIDES ||
      this.options.top === this.topsEnum.SHORTHAIR_THECAESAR ||
      this.options.top === this.topsEnum.SHORTHAIR_THECAESARSIDEPART
    ) {
      return true;
    } else return false;
  }

  save(): void {
    console.log(this.avatarForm.value);
    this.facade.save(this.avatarForm.value).subscribe(
      (response) => {
        this.toastr.success('Publicación exitosa');
        this.router.navigate(['/']);
      },
      (error) => {
        this.toastr.error('No se pudo guardar el avatar');
      }
    );
  }
}
