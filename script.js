const calculateAge = () =>{
    const userInput = document.getElementById('DOB').value;
    const dob = new Date(userInput);
    // console.log(dob);
    if(userInput == null || userInput == ""){
        document.getElementById('resultContainer').innerHTML = `Welcome to Unbeatable Study at the time ${dob}`;
    }else{
        var dobYear = dob.getFullYear();
        var dobMonth = dob.getMonth();
        var dobDate = dob.getDate();

        let now = new Date();
        const currYear = now.getFullYear();
        const currMonth = now.getMonth();
        const currDate = now.getDate();
        var dateDiff; var monthDiff; var yearDiff;
        yearDiff = currYear-dobYear;
        if(currMonth>=dobMonth){
            monthDiff = currMonth-dobMonth;
        }else{
            yearDiff--;
            monthDiff = 12+currMonth-dobMonth;
        }

        if(currDate>=dobDate){
            dateDiff = currDate-dobDate;
        }else{
            monthDiff--;
            dateDiff = 30+currDate-dobDate;

            if(monthDiff<0){
                monthDiff=11;
                yearDiff--;
            }
        }
        const age = {
            years : yearDiff,
            months : monthDiff,
            days : dateDiff
        };
        document.getElementById('resultContainer').innerHTML = `Your age is ${age.years} year , ${age.months} month and ${age.days} day `;
    }
};