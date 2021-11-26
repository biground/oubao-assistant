import { Message } from "wechaty";

export class NormalHandler {
  private static _ins: NormalHandler;
  constructor() {}

  public static get ins() {
    if (!NormalHandler._ins) {
      NormalHandler._ins = new NormalHandler();
    }
    return NormalHandler._ins;
  }

  deal(message: Message) {
    // 谁发的消息
    console.log(`@${message.talker().name()}，普通聊天还未实现`);
  }
}
