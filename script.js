const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Black Summoner - épisode 11 VOSTFR",
      description: "Vous regardez",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/30c52b8f481041c3e629bbf67c90811e.jpe",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m201.syncusercontent.com/mfs-60:9c2ca484fdca9f97c5dfdf3e3d2ef506=============================/p/Black%20Summoner%2011.mp4?allowdd=0&datakey=E/i0wr/6ssmwyc+4xN9F6/04cLf98JbKmEQpE13kWuf8CoVI41uY3Dqs45gBcPmg5x/YkjxO6O2CBv/+C/IqIlTJcblB9IpvtuDkq+BOOmv41qaG6tfSaM6ysxTPdtFDTa27fp3rUDZJCsFkbC+qQD0MCY3IHTViJ7TW7xZxOGP41s3zFzpRozNX5KXF74riPk8hIBya2S8ooibkZL0FkCISU3jxccdbgbWLzjcihE4ospkbMWr0hIdMPKoNz9SkVq/vJLuJTvjF2qyBZQdzgzXTfWtjGq/nq/ZfsrH+ELZrgdS6S0U9Nz8wiTSoZR0vafazmF8UohOxJXZvvn7tZQ&engine=ln-2.3.7.3&errurl=gSuKh5qOPPXaCf52o9b4GiSSRfjGYD4mT3KHLc4015fapjCewwujtCwR6/eErl6Xvhhn7YdvdTx5TWnHLc6K9KJ79EqrWeASEEHUynYBekBShhYXowopSKl2qyNOuYXMd+xw1Xf0bDRCoVqg1ujlqH7Xws5XbJzQ695Www1QRUSRu6VSAQDGhnLIOb0xGz6iomywB5tQ8gUn59OBzdFrnwhU7XCnxFd/H493CWr+Wgm+cVYiwi6cKtvCry9aKHPReQfXcaQU9orRWKW/4waMUMHdPcApvRcmoqOQGFQxH6z/gdIdOxOEZvxLY6fB6EBIcxKzcxkgGyLtC0q1qgTpAw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQmxhY2slMjBTdW1tb25lciUyMDExLm1wNCI7ZmlsZW5hbWUqPVVURi04JydCbGFjayUyMFN1bW1vbmVyJTIwMTEubXA0Ow&ipaddress=1458994159&linkcachekey=edc151a60&linkoid=1749570005&mode=101&sharelink_id=11780663440005&timestamp=1672578121368&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=5cb0e3327a855d0f54c296d7dbca6268ae691da5&cachekey=60:9c2ca484fdca9f97c5dfdf3e3d2ef506=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
