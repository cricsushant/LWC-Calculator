import { api, LightningElement } from "lwc";

export default class MeetingRoom extends LightningElement {
  @api
  meetingRoomInfo = { name: "S001", capacity: 50 };
  @api
  isRoomVisible = false;
}
