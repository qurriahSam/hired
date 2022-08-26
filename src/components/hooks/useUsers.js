export const signupUsers = async (userObj) => {
  try {
    const url = "http://localhost:3000/job_seekers";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userObj),
    });
    const data = response.json();
    return data;
  } catch (error) {}
};

export const signupEmployer = async (employerObj) => {
  try {
    const url = "http://localhost:3000/employers";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(employerObj),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const signin = async (userObj) => {
  try {
    const url = "http://localhost:3000/login";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userObj),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
