import Contact from "./models/Contact.class";
import { LEVELS } from "./models/Level.enum";
import Task from "./models/Task.class";

export const contacts = [
  new Contact("Jhoan", "Perez", "jhoan@gmail.com", false),
  new Contact("Jimena", "Arias", "jime@gmail.com", true),
  new Contact("Andrea", "Doe", "andrea@gmail.com", false),
];

export const tasks = [
  new Task("read swift book", "read two chapters", LEVELS.URGENT),
  new Task("search two exercises", "two algebraic exercises", LEVELS.NORMAL),
  new Task(
    "solve linear algebra exercise",
    "solve linear algebra",
    LEVELS.BLOCKING
  ),
];
