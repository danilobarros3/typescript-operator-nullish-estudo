import { log } from "./colors";

type GithubUser = { username: string; stars: number };

type logOptions = {
  fields?: {
    "user-id"?: number;
    avatarUrl?: string;
    totalStars?: number;
    getStars?: (user: GithubUser) => number;
  };
};

const user = {
  stars: 100,
  totalStars: 0,
  username: "danilobarros3",
};

const getUser = (user: GithubUser, options?: logOptions) => {
  const avatarUrl = options?.fields?.avatarUrl
  const userId = options?.fields?.["user-id"]
  const totalStars = options?.fields?.totalStars ?? 1;
  const stars = options?.fields?.getStars?.(user)
  const userName = user.username;
  return console.log({userName, avatarUrl, totalStars, stars, userId})

};

getUser(user, {
  fields: {
    "user-id": 1,
    avatarUrl: "https://avatars2.githubusercontent.com/u/0",
    getStars: (user: GithubUser) => user.stars,
  },
})
