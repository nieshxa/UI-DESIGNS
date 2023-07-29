// hide the search icon on search input focus
const searchInput = document.querySelector(".search input");

searchInput.addEventListener("focus", () => {
  // Add a class to the label when the input gains focus
  document.querySelector(".search").classList.add("input-focused");
});

searchInput.addEventListener("blur", () => {
  // Remove the class from the label when the input loses focus
  document.querySelector(".search").classList.remove("input-focused");
});

// like toggle
  document.addEventListener("DOMContentLoaded", () => {
    const actLikes = document.querySelectorAll(".act.like");

    actLikes.forEach((likeDiv) => {
      likeDiv.addEventListener("click", () => {
        const icon = likeDiv.querySelector("iconify-icon");

        if (icon.getAttribute("icon") === "basil:like-outline") {
          icon.setAttribute("icon", "basil:like-solid");
          likeDiv.style.color = "#1b74e4"; /* Navy blue color */
        } else {
          icon.setAttribute("icon", "basil:like-outline");
          likeDiv.style.color = ""; /* Revert to default color (if any) */
        }
      });
    });
  });