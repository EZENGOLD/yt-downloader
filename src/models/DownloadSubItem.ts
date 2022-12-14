import { DownloadSubItemParams } from 'types';
import { ItemSize } from './ItemSize';
import { ItemSpeed } from './ItemSpeed';

export class DownloadSubItem {
  id: string;

  video_id?: string = '';

  download_url: string = '';

  expires_at: string = '';

  title: string;

  img: string | undefined;

  size: ItemSize;

  currentSize: ItemSize;

  speed?: ItemSpeed;

  status: string;

  error?: string;

  numberOfSeconds?: number = 0;

  author?: string = '';

  description?: string = '';

  constructor(params: DownloadSubItemParams) {
    this.id = params?.id;
    this.video_id = params?.video_id;
    this.download_url = params?.download_url;
    this.expires_at = params?.expires_at;
    this.title = params?.title;
    this.img = params?.img;
    this.size = params?.size;
    this.currentSize = params?.currentSize;
    this.speed = params?.speed;
    this.status = params?.status;
    this.error = params?.error;

    this.numberOfSeconds = params?.numberOfSeconds;
    this.author = params?.author;
    this.description = params?.description;
  }
}
