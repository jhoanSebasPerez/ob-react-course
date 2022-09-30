import { LEVELS } from "./Level.enum";

let incrementalID = 1;

class Task {
  id = incrementalID++;
  name = "";
  description = "";
  completed = false;
  level = LEVELS.NORMAL;
  createdAt = new Date();

  constructor(name, description, level) {
    this.name = name;
    this.description = description;
    this.level = level;
  }
}

export default Task;
