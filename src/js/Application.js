import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  count = 0;

  constructor() {
    super();

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    this._beat = new Beat();
    this._beat.on(Beat.events.BIT, () => this._create(lyrics, this.count));
  }
  _create(lyrics) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = lyrics[this.count];
    this.count++;
    this.count = this.count >= lyrics.length ? 0 : this.count;
    console.log(this.count);
    document.querySelector(".main").appendChild(message);
  }
}
