

 function closePopup() {
    document.getElementById("valentineWarning").style.display = "none";
  }
const radiosReponseTimeAudits = document.querySelectorAll('input[name="howLongReply"]');


const desperateCute = document.getElementById("deperate");
const stratgeicMins = document.getElementById("strategic");
const emotionallyUnstable = document.getElementById("emtionallyUnstable");
const replyInHead = document.getElementById("replyInHead");



radiosReponseTimeAudits.forEach((radiosReponseTimeAudit) => {
  radiosReponseTimeAudit.addEventListener("change", function () {
    if (this.value === "Immediately") {
      desperateCute.style.display = "block";

      stratgeicMins.style.display = "none";
      emotionallyUnstable.style.display = "none";
      replyInHead.style.display = "none";

    } else if (this.value === "Strategic") {
        stratgeicMins.style.display = "block";

      desperateCute.style.display = "none";
      replyInHead.style.display = "none";
      emotionallyUnstable.style.display = "none";
    } else if (this.value === "EmotionallyUnstable") {
      emotionallyUnstable.style.display = "block";

      replyInHead.style.display = "none";
      desperateCute.style.display = "none";
      stratgeicMins.style.display = "none";
    } else if (this.value === "headReply") {
      replyInHead.style.display = "block";
      
      desperateCute.style.display = "none";
      stratgeicMins.style.display = "none";
      emotionallyUnstable.style.display = "none";
    } else {
      // hide both for other options
      desperateCute.style.display = "none";
      stratgeicMins.style.display = "none";
      emotionallyUnstable.style.display = "none";
      replyInHead.style.display = "none";
    }
  });
});




// FOOD LOYALTY TEST

// store the radiogroup as a list
const radios = document.querySelectorAll('input[name="friedsChoice"]');

// this should target the TOGGLE, the oe you wama turn off and on
const warningNo = document.getElementById("friesNoWarning");
const askNicelyFries = document.getElementById("askNicely");
const friesYesMessage = document.getElementById("friesYesMessage");
const stoleMyFries = document.getElementById("stoleMyfries");

radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.value === "noShare") {
      warningNo.style.display = "block";

      friesYesMessage.style.display = "none";
      askNicelyFries.style.display = "none";
      stoleMyFries.style.display = "none";

    } else if (this.value === "yesShare") {
        friesYesMessage.style.display = "block";

      warningNo.style.display = "none";
      stoleMyFries.style.display = "none";
      askNicelyFries.style.display = "none";
    } else if (this.value === "askNicely") {
      askNicelyFries.style.display = "block";

      stoleMyFries.style.display = "none";
      warningNo.style.display = "none";
      friesYesMessage.style.display = "none";
    } else if (this.value === "stealYours") {
      stoleMyFries.style.display = "block";
      
      warningNo.style.display = "none";
      friesYesMessage.style.display = "none";
      askNicelyFries.style.display = "none";
    } else {
      // hide both for other options
      warningNo.style.display = "none";
      friesYesMessage.style.display = "none";
      askNicelyFries.style.display = "none";
      stoleMyFries.style.display = "none";
    }
  });
});


// FLIRTING STYLE

const radiosFlirtingStyles= document.querySelectorAll('input[name="flirtingStyle"]');


const aggressiveStyle = document.getElementById("aggressive");
const subtleStyle = document.getElementById("subtle");
const accidentalStyle = document.getElementById("accidental");
const memeStyle = document.getElementById("sendMemes");



radiosFlirtingStyles.forEach((radiosFlirtingStyle) => {
  radiosFlirtingStyle.addEventListener("change", function () {
    if (this.value === "Aggressive") {
      aggressiveStyle.style.display = "block";

      subtleStyle.style.display = "none";
      accidentalStyle.style.display = "none";
      memeStyle.style.display = "none";

    } else if (this.value === "Subtle") {
        subtleStyle.style.display = "block";

      aggressiveStyle.style.display = "none";
      memeStyle.style.display = "none";
      accidentalStyle.style.display = "none";
    } else if (this.value === "Accidental") {
      accidentalStyle.style.display = "block";

      memeStyle.style.display = "none";
      aggressiveStyle.style.display = "none";
      subtleStyle.style.display = "none";
    } else if (this.value === "sendMemes") {
      memeStyle.style.display = "block";
      
      aggressiveStyle.style.display = "none";
      subtleStyle.style.display = "none";
      accidentalStyle.style.display = "none";
    } else {
      // hide both for other options
      aggressiveStyle.style.display = "none";
      subtleStyle.style.display = "none";
      accidentalStyle.style.display = "none";
      memeStyle.style.display = "none";
    }
  });
});
