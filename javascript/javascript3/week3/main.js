const btnTag = document.getElementById("urlSubmitBtn");
const urlTag = document.getElementById("url");
const message = document.getElementById("message");
const screenshotTag = document.getElementsByClassName("screenshot-wrapper");
const screenshotList = document.getElementById("screenshotList");

let screenshotURL;

/* fucntion for getting a screen shot data*/

const getData = async (urlTag) => {
    const URL = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${urlTag}&width=1200&height=1000&fullscreen=false`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '799af886e7msh3f730bb0f269543p1be56cjsn36b947e2385b',
            'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(URL, options);
        const DATA = await response.text();
        console.log(DATA);
        return result;
    } catch (DATA) {
        console.error(error);
    }
}

btnTag.addEventListener("click", handleClick);

async function handleClick(e) {
    e.preventDefault();
    const data = await getData(urlTag.value);
    screenshotURL = JSON.parse(data).screenshotURL;

    displayScreenshot(screenshotURL);

}

function displayScreenshot(screenshotURL) {
    console.log(screenshotURL); // Logs the screenshot URL to the console for debugging purposes

    // Find the image element with the class "screenshot"
    const image = document.querySelector(".screenshot");

    // Set the source and alt attributes of the image
    image.src = screenshotURL;
    image.alt = "website-screenshot";

    // Find the screenshot wrapper element
    const screenshotWrapper = document.querySelector(".screenshot-wrapper");

    // Create a save button element
    const saveButton = document.createElement("button");
    saveButton.id = "saveBtn";
    saveButton.innerText = "Save";

    // Append the save button to the screenshot wrapper
    screenshotWrapper.appendChild(saveButton);
}

document.addEventListener("click", handleDocumentClick);
async function handleDocumentClick(e) {
    const saveButton = e.target.closest("#saveBtn");
    if (saveButton) {
        e.preventDefault();
        await postData();
        showSavingMessage();
    }
}

const postData = async () => {
    const apiURL = `https://crudcrud.com/api/75d9a21e2f7a456f84b2a659c043be30/screenshots`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ screenshotURL: screenshotURL }),
    };

    try {
        const response = await fetch(apiURL, options);
        const postData = await response.json();
        showSavedScreenshots(postData);
    } catch (error) {
        console.log(error);
    }
};



function showSavedScreenshots(postData) {
    console.log(postData); // Logs the `savedData` to the console for debugging purposes
    const screenshots = document.querySelector(".all_screenshots");
    screenshots.style.display = "block";

    const screenshotItem = document.createElement("li");
    const link = document.createElement("a");
    const deleteButton = document.createElement("button");

    link.href = savedData.screenshotURL;
    link.target = "_blank";
    link.textContent = urlTag.value;

    deleteButton.classList.add("deleteButton");
    deleteButton.dataset.id = savedData._id;
    deleteButton.textContent = "Delete";

    screenshotItem.appendChild(link);
    screenshotItem.appendChild(deleteButton);

    const screenshotList = document.querySelector(".screenshotList");
    screenshotList.appendChild(screenshotItem);
}


document.addEventListener("click", deleteScreenshot);
async function deleteScreenshot(e) {
    const deleteButton = e.target.closest(".deleteButton");
    if (deleteButton) {
        e.preventDefault();
        const id = deleteButton.dataset.id;
        await deleteScreenshot(id);
        deleteButton.closest("li").remove();
    }
}


const deleteScreenshot = async (id) => {
    const apiURL = `https://crudcrud.com/api/75d9a21e2f7a456f84b2a659c043be30/screenshots/${id}`;

    try {
        const response = await fetch(apiURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw new Error(" request failed");
        }
    } catch (error) {
        console.log(error);
    }
};

