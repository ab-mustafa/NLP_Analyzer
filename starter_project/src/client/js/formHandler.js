// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'http://localhost:8000'

const form = document.getElementById('urlForm');
const result_form = document.getElementById('results');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const url = document.getElementById('name').value;
    clear_results();
    // This is an example code that checks the submitted name. You may remove it from your code
    //checkForName(formText);
    
    // Check if the URL is valid
    if(!isValidURL(url)){
        alert("Invalid URL!");
        return;
    }
    
 
    // If the URL is valid, send it to the server using the serverURL constant above
    analyzeTextFromUrl(`${serverURL}/analyze-url`, url).then(result => {
        console.log(result);
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        

        // Optionally, you can add text to each <li> element
        li1.textContent = `Content Type: ${result["sentiment"]}`;
        li2.textContent = `Input Text Preview: ${result["text"]}`;

        // Append the <li> elements to the <div>
        result_form.appendChild(li1);
        result_form.appendChild(li2);
        
    });  
}

// Function to send data to the server
async function analyzeTextFromUrl(server_url, target_url) {
    try {
        const response = await fetch(server_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "url": target_url }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Result:', result);
        return result;

    } catch (error) {
        console.error(`Error calling ${server_url}:`, error);
    }

}


// Function check if valid URL
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}


// Remove Previous results
function clear_results(){
    while (result_form.firstChild) {
        result_form.removeChild(result_form.firstChild);
    }
}


// Export the handleSubmit function
export { handleSubmit };

