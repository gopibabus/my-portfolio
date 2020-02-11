import { jobDesc } from './content.js';

let job_descriptions = jobDesc();

for (var index in job_descriptions) {
    document.getElementById(`${index}`).innerHTML = `${job_descriptions[index]}`;
}