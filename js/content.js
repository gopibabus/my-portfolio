$(function() {
  const jobItems = {
    "portfolio-name": "Gopibabu Srungavarapu",
    "portfoli-intro": `Nothing is better than solving complex real-world problems with clean, elegant software. 
      I have a passion for design and well-written code! I love to take on new challenges that push me to learn something new,
      even if it is only to update an older piece of technology. I admire reliability, robustness, and performance in engineering.
      It’s important that a product can fulfill its purpose, as well as work intuitively.`,

    "disney-job-title": "Software Applications Developer",
    "disney-job-client": "Walt Disney Attractions Technology, Orlando, FL",
    "disney-job-description": `Worked on customer facing web application, which focuses on providing alternative resorts and rooms to the customer. 
      The primary goal of this application is to provide alternative rooms and resorts to the customer who already booked the resort, 
      which helps Disney to divert traffic from a busy resort to other available resorts.`,
    "disney-job-duration": "February 2018 – May 2019",

    "nytimes-job-title": "Software Engineer",
    "nytimes-job-client": "New York Times, New York, NY",
    "nytimes-job-description": `Worked in e-commerce customer care project, which is an intranet application for New York Times. 
      This project focuses on the development and maintaining the most innovative and affordable CRM solution for the New York Times.`,
    "nytimes-job-duration": "July 2016 – January 2018",

    "studyhour-job-title": "PHP Developer",
    "studyhour-job-client": "Study hour, Boston, MA",
    "studyhour-job-description": `Study hour is an online Teaching website which provides all types of courses to students at home convenience.`,
    "studyhour-job-duration": "May 2015 - July 2016",

    "ascendLearning-job-title": "PHP Developer",
    "ascendLearning-job-client": "Ascend Learning, Boston, MA",
    "ascendLearning-job-description": `Med Hub is a project that provides online courses related to graduate and undergraduate medical students. 
    It is the central hub of information to pull & push data to/from authoritative sources securely and effectively.`,
    "ascendLearning-job-duration": "Jan 2013 - Dec 2014",

    "popcorn-job-title": "PHP Developer",
    "popcorn-job-client": "Popcorn Apps, Hyderabad, INDIA",
    "popcorn-job-description": `Popcorn Apps is the leading e-commerce and web service provider supporting Multi-store Multi-shop systems and 
    online shopping for various clients worldwide, especially for online sales, E-commerce web solutions and secured payment checkouts.`,
    "popcorn-job-duration": "Jan 2011 - Dec 2012"
  };

  for (var index in jobItems) {
    document.getElementById(`${index}`).innerHTML = `${jobItems[index]}`;
  }
    
    const disney_points = [
        'xxxx', 'cccccc'
    ];
});
