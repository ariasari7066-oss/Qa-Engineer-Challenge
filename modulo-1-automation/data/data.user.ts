type User = {
  username: string;
  password: string;
};

export const users: Record<string, User> = {
  success: {
    username: "standard_user",
    password: "secret_sauce"
  },
  bad_credential: {
    username: "standard_user",
    password: "secret_sauc"
  },
  empty_password: {
    username: "standard_user",
    password: ""
  },
  empty_user: {
    username: "",
    password: "secret_sauc"
  },
  empty_credential: {
    username: "",
    password: ""
  },
  locked_user: {
    username: "locked_out_user",
    password: "secret_sauce"
  }
};

