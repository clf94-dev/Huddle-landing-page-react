import Growtogether from "../images/illustration-grow-together.svg";
import Flowing from "../images/illustration-flowing-conversation.svg";
import Users from "../images/illustration-your-users.svg";

const features = [
  {
    key: 1,
    classes: "features-cont feat-back",
    title: " Grow Together",
    text:
      "  Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.  ",
    img: { Growtogether },
    imgALT: "grow together",
    imgKEY:1
  
  },
  {
    key: 2,
    classes: "features-cont reverse-order",
    title: " Flowing Conversations",
    text:
      "  You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. ",
    img: { Flowing },
    imgALT: "flowing conversation",
    imgKEY:2
  },
  {
    key: 3,
    classes: "features-cont feat-back",
    title: " Your Users ",
    text:
      "   It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. ",
    img: { Users },
    imgALT: "your users",
    imgKEY:3
  }
];

export default features;
