document.querySelectorAll("[data-upload-demo]").forEach((input) => {
  input.addEventListener("change", () => {
    const output = input.closest(".upload-box")?.querySelector(".upload-file-name");
    if (!output) return;

    output.textContent = input.files?.[0]
      ? `Selected preview file: ${input.files[0].name}`
      : "No file selected yet.";
  });
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
