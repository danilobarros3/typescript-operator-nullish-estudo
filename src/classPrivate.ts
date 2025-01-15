import { log } from "./colors";

//# É privado
class GitUser {
  #userName: string;
  #repos: number;

  constructor(userName: string, repos: number) {
    this.#userName = userName;
    this.#repos = repos;
  }

  greeting() {
    return `User ${this.#userName}, have ${this.#repos} repositories.`;
  }

  get userName() {
    return this.#userName;
  }
  set userName(name) {
    this.#userName = name;
  }

  set repos(repos) {
    this.#repos = repos;
  }

  get repos() {
    return this.#repos;
  }
}

const gitUser = new GitUser("danilobarros3", 10);
gitUser.userName = "John Doe";
const nameArray = gitUser.userName.split(" ");
console.log(nameArray)
gitUser.repos = 10;

log(gitUser.greeting());

// const GitUsers = () => {
//   let userName = "";
//   let repos = 0;
//   return {
//     getUserName() {
//       return userName;
//     },
//     setUserName(name: string) {
//       return (userName = name);
//     },
//     getRepos() {
//       return repos;
//     },
//     setRepos(rep: number) {
//       return (repos = rep);
//     },
//     greeting() {
//       return `User ${userName}, have ${repos} repositories.`;
//     },
//   };
// };

// const otherGithubUser = GitUsers()
// otherGithubUser.setUserName("Jhon doe")
// otherGithubUser.setRepos(15)
