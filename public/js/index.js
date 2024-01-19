("use stict");

(() => {
  document.body.onload = () => {
    populateProjectData();
  };

  document.querySelector("#keep-hash").addEventListener("click", () => {
    let h = document.querySelector("#hash-display").innerHTML;
    console.log(h);
    document
      .querySelector("#preview-frame")
      .setAttribute("src", "/iframe?hash=" + h);
  });

  document.querySelector("#new-hash").addEventListener("click", () => {
    let h =
      "" +
      Array(16)
        .fill(0)
        .map((_) => "0123456789abcdef"[(Math.random() * 16) | 0])
        .join("");
    console.log(h);
    document
      .querySelector("#preview-frame")
      .setAttribute("src", "/iframe?hash=" + h);
    document.querySelector("#hash-display").innerHTML = h;
  });

  document
    .querySelector("#build-sequence-button")
    .addEventListener("click", () => {
      document.querySelector("#build-sequence-button").disabled = true;
      document.querySelector("#build-sequence-button").style.visibility =
        "hidden";
      launchBuildSequence();
    });

  function populateProjectData() {
    fetch("/get-project-data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        document.querySelector("#project-name-holder").innerHTML =
          res.projectName;
        document.querySelector("#project-desc-holder").innerHTML =
          res.websiteProjectDescription;
        document.querySelector("#project-website-holder").innerHTML =
          res.projectWebUrl;
        document.querySelector("#project-price-holder").innerHTML = res.price;
        document.querySelector("#project-quantity-holder").innerHTML =
          res.numberOfEditions;
        document.querySelector("#project-date-holder").innerHTML =
          res.releaseDate;
        document.querySelector("#project-roylaties-holder").innerHTML =
          res.royaltiesPercent;
        document.querySelector("#artist-wallet-holder").innerHTML =
          res.artistsPayoutWallet;
        document.querySelector("#royalty-wallet-holder").innerHTML =
          res.openSeaCollectionFee_recipient;
        document.querySelector("#viewport-name-holder").innerHTML =
          res.titleForViewport;
        document.querySelector("#collection-name-holder").innerHTML =
          res.openSeaCollectionName;
        document.querySelector("#collection-desc-holder").innerHTML =
          res.openSeaCollectionDescription;
        document.querySelector("#token-desc-holder").innerHTML =
          res.tokenDescriptionText;
      })
      .catch((err) => {
        console.log("We were unable to get project info - ", err);
      });
  }

  function launchBuildSequence() {
    fetch("/build-sequence", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(() => {
        document.querySelector("#build-sequence-button-response").innerHTML =
          response.result;
        document.querySelector("#project-meta-display").innerHTML =
          response.result;
      })
      .then(() => {
        setTimeout(() => {
          document.querySelector("#build-sequence-button-response").innerHTML =
            "";
        }, "5000");
      })
      .catch((err) => {
        console.log("We were unable to complete build sequence - ", err);
      });
  }
})();
