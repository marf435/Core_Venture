const buyNowBtn = document.getElementById("buy-now");

const presaleFormContainer = document.getElementById("presale-form-container");

const closePresaleForm = document.getElementById("close-presale-form");
const closeVideoConcept = document.getElementById("close-video-concept");
const closeMilestone = document.getElementById("close-milestone");
const closeWhitePaper = document.getElementById("close-whitepaper");

const bnbAccumulated = document.getElementById("bnb-balance");

closePresaleForm.onclick = () => {
  presaleFormContainer.style = "display: none";
};

async function openPresaleForm() {
  presaleFormContainer.style = "display: flex";
}

window.addEventListener("load", async () => {
  const web3 = new Web3("https://bsc-dataseed1.binance.org:443");

  const currentPresaleBalance = web3.utils.fromWei(
    `${await (
      await web3.eth.getBalance("0x7D9800c0200bdDF93120D635a477F571B1db66FC")
    ).toString()}`
  );

  const progress = (Number(currentPresaleBalance) / 150) * 100;

  bnbAccumulated.style.minWidth = `${progress}%`;
  bnbAccumulated.innerHTML = `${currentPresaleBalance}`;
});

const presaleConceptContainer = document.getElementById(
  "presale-concept-container"
);

async function openEmbeddedConcept() {
  presaleConceptContainer.style = "display: flex";
}

closeVideoConcept.onclick = () => {
  presaleConceptContainer.style = "display: none";
};

const milestoneContainer = document.getElementById("milestone-container");

async function openMilestoneContainer() {
  milestoneContainer.style = "display: flex";
}

closeMilestone.onclick = () => {
  milestoneContainer.style = "display: none";
};

const whitepaperContainer = document.getElementById("whitepaper-container");

async function openWhitePaperVideo() {
  whitepaperContainer.style = "display: flex";
}

closeWhitePaper.onclick = () => {
  whitepaperContainer.style = "display: none";
};

/**
 * @dev copy to clipboard
 */

async function copyCaToClipboard() {
  navigator.clipboard.writeText("0x13D4E7477726Dd2719215286d1A3b4872a7d3312");

  alert("Contract Address Copied.");
}
