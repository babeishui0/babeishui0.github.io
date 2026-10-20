(() => {
  "use strict";

  document.querySelectorAll(".glass-share").forEach((section) => {
    const feedback = section.querySelector(".glass-share__feedback");
    const status = section.querySelector(".glass-share__status");
    const copyText = section.querySelector(".glass-share__copy-text");
    const openLink = section.querySelector(".glass-share__open");
    const buttons = section.querySelectorAll("[data-copy-share]");

    buttons.forEach((button) => {
      button.addEventListener("click", async () => {
        const platform = button.dataset.copyShare;
        const text = `${section.dataset.shareTitle}\n${section.dataset.shareUrl}`;
        buttons.forEach((item) => { item.disabled = true; });
        feedback.hidden = false;
        copyText.hidden = true;
        openLink.hidden = true;
        status.textContent = "Copying…";

        try {
          await navigator.clipboard.writeText(text);
          status.textContent = `Title and link copied. Paste them into ${platform} to share.`;
        } catch (_) {
          status.textContent = `Copy the title and link below, then share on ${platform}.`;
          copyText.value = text;
          copyText.hidden = false;
          copyText.focus();
          copyText.select();
        } finally {
          openLink.href = button.dataset.platformUrl;
          openLink.textContent = `Open ${platform}`;
          openLink.hidden = false;
          buttons.forEach((item) => { item.disabled = false; });
        }
      });
    });
  });
})();
