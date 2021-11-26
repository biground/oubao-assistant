import { Message } from "wechaty";

export class RemindHandler {
  private static _ins;
  private who;
  private what;
  private when;
  constructor() {}
  public static get ins(): RemindHandler {
    if (!RemindHandler._ins) {
      RemindHandler._ins = new RemindHandler();
    }
    return RemindHandler._ins;
  }
  deal(message: Message) {

  }
}
