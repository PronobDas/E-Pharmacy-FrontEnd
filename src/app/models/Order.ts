import {Medicine} from "./Medicine";

export class Order{

  id: string;
  userId: string;
  phone: string;
  location: string;
  prescription: any;
  confirmed: boolean;
  units: number[]; //list int
  medicines: Medicine[]; //list med
  totalPrice: number;
}

