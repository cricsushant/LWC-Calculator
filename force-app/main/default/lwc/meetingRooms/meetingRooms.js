import { LightningElement } from "lwc";

export default class MeetingRooms extends LightningElement {
  meetingRoomsInfo = [
    { name: "A001", capacity: 45 },
    { name: "A002", capacity: 56 },
    { name: "A003", capacity: 67 },
    { name: "A004", capacity: 40 }
  ];
}
