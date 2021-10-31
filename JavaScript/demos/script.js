let myTest = {
    run: function() {
        let link = document.querySelector('a');
        link.textContent = 'Mozilla Developer Network';
        link.href = 'https://developer.mozilla.org';
        let sect = document.querySelector('section');
        let para = document.createElement('p');
        para.textContent =  'We hope you enjoyed the ride.';
        sect.appendChild(para);
        let text = document.createTextNode(' — the premier source for web development knowledge.');
        sect.appendChild(text);
    }
};
myTest.run();