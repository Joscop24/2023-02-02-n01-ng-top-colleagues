import {Colleague} from "./colleague";
import {LikeHate} from "./like-hate";

export interface Vote {

  collegue: Colleague;
  vote: LikeHate;
}
