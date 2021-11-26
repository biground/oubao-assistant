import { RemindHandler } from "./../module/RemindHandler";
import { Menu } from "./../menu/Menu";
import { Message } from "wechaty";
import { bot } from "../main";
export class MentionHandler {
  private static _ins;
  constructor() {}
  public static get ins(): MentionHandler {
    if (!MentionHandler._ins) {
      MentionHandler._ins = new MentionHandler();
    }
    return MentionHandler._ins;
  }
  public async deal(message: Message) {
    // 谁发的消息
    message.say(`@${message.talker().name()}`);
    let mentionStr = `@${bot.currentUser().name()}`;
    let text = "";
    text = message.text().replace(mentionStr, "");
    if (/提醒/.exec(text)) {
      RemindHandler.ins.deal(message);
    } else {
      // 接下来的功能
      await message.say("@你妈@，傻逼");
      Menu.ins.showMenu();
    }
    console.log(message.toString());
  }
}
