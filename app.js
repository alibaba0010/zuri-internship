import express from "express";
const app = express();

// Define a route that accepts two query parameters: time and github
app.get("/", (req, res) => {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: "Both time and github parameters are required" });
  }

  // Get the current UTC time
  const currentUTC = new Date().toISOString().split(".")[0] + "Z";

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[new Date().getDay()];
  // Return the current UTC time, GitHub profile link, and status code 200
  res.status(200).json({
    slack_name,
    current_day: currentDayOfWeek,
    utc_time: currentUTC,
    track,
    github_filr_url: "https://github.com/alibaba0010",
    github_repo_url: "https://github.com/alibaba0010/",
    statusCode: 200,
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
